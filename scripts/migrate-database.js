// @flow
import fetch from 'node-fetch'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

export const endpoints = {
  simple: 'https://api.graph.cool/simple/v1/cjdnw03hv8l6m01133d2ix1pb',
}

const _parse = (key, graphResponse) => {
  const { data, error } = graphResponse
  if (error) {
    throw error
  }

  return data[key]
}

const parse = key => graphResponse => _parse(key, graphResponse)

const getFormsQuery = gql`
  query {
    allForms(filter: { stepId: 5 }) {
      id
      stepId
      data
      user {
        id
      }
    }
  }
`

const userSortedFormFragment = gql`
  fragment SortedForms on User {
    forms(orderBy: stepId_DESC) {
      id
      createdAt
      updatedAt
      stepId
      data
    }
  }
`

export const updateForm = ({ userId, id, data }) =>
  client
    .mutate({
      mutation: gql`
        mutation update($userId: ID!, $id: ID!, $data: Json!) {
          updateForm(userId: $userId, id: $id, data: $data) {
            user {
              ...SortedForms
            }
          }
        }
        ${userSortedFormFragment}
      `,
      variables: {
        userId,
        id,
        data,
      },
    })
    .then(parse('updateForm'))

export const client = new ApolloClient({
  link: new HttpLink({ uri: endpoints.simple, fetch: fetch }),
  cache: new InMemoryCache(),
})

export const timeToCompleteGoal = {
  DAY: {
    text: 'A day',
    key: 'DAY',
    moment: [{ unit: 'd', value: 1 }],
    estimate: null,
    frequency: 'DAILY',
  },
  WEEK: {
    text: 'A week',
    key: 'WEEK',
    moment: [{ unit: 'w', value: 1 }],
    estimate: Array(7)
      .fill()
      .map((_, index) => `Day ${index + 1}`),
    frequency: 'DAILY',
  },
  MONTH: {
    text: 'A month',
    key: 'MONTH',
    moment: [{ unit: 'M', value: 1 }],
    estimate: Array(4)
      .fill()
      .map((_, index) => `Week ${index + 1}`),
    frequency: 'WEEKLY',
  },
  MON_6: {
    text: '6 months',
    key: 'MON_6',
    moment: [{ unit: 'M', value: 6 }],
    estimate: Array(6)
      .fill()
      .map((_, index) => `Month ${index + 1}`),
    frequency: 'MONTHLY',
  },
  YEAR: {
    text: 'A year',
    key: 'YEAR',
    moment: [{ unit: 'y', value: 1 }],
    estimate: Array(12)
      .fill()
      .map((_, index) => `Month ${index + 1}`),
    frequency: 'MONTHLY',
  },
}

const keys = Object.keys(timeToCompleteGoal)

const mapCurrentValuesToKeys = {
  ['A day']: timeToCompleteGoal.DAY.key,
  ['A week']: timeToCompleteGoal.WEEK.key,
  ['A month']: timeToCompleteGoal.MONTH.key,
  ['6 months']: timeToCompleteGoal.MON_6.key,
  ['A year']: timeToCompleteGoal.YEAR.key,
}

export const FORM_KEYS = {
  form_5_how_long: 'form_5_how_long',
  form_5_checkin: 'form_5_checkin',
}

const filterV1 = d => {
  const { data } = d
  const { value } = data
  if (!value) return false
  return true
}

const invalidLength = v => !keys.find(k => k === v)

const filterUndamaged = d => {
  const { data } = d
  const { value } = data
  const isHealthy = value.reduce((healthy, goal) => {
    const howLong = goal[FORM_KEYS.form_5_how_long]
    const checkin = goal[FORM_KEYS.form_5_checkin]
    if (checkin) return false
    if (invalidLength(howLong.value)) return false
    return healthy
  }, true)
  return !isHealthy
}
const processGoal = goal => {
  let newGoal = {
    ...goal,
  }
  const howLong = goal[FORM_KEYS.form_5_how_long]
  const checkin = goal[FORM_KEYS.form_5_checkin]
  if (checkin) {
    delete newGoal[FORM_KEYS.form_5_checkin]
  }
  if (invalidLength(howLong.value)) {
    newGoal[FORM_KEYS.form_5_how_long] = {
      ...howLong,
      value: mapCurrentValuesToKeys[howLong.value],
    }
  }
  return newGoal
}

const processData = d => {
  const { data } = d
  const { value } = data
  const newValue = value.map(processGoal)
  return { ...d, data: { ...data, value: newValue } }
}

const filterCorruptedForms = gcData =>
  gcData
    .filter(filterV1)
    .filter(filterUndamaged)
    .map(processData)

client
  .query({
    query: getFormsQuery,
  })
  .then(parse('allForms'))
  .then(filterCorruptedForms)
  .then(forms => {
    return Promise.all(
      forms.map(form => {
        const { id, user, data } = form
        return updateForm({ id, data, userId: user.id })
      })
    )
  })
  .catch(e => console.log(e))
