// @flow
const fetch = require('node-fetch')
const { ApolloClient } = require('apollo-client')
const { HttpLink } = require('apollo-link-http')
const { InMemoryCache } = require('apollo-cache-inmemory')
const gql = require('graphql-tag')
const jsonfile = require('jsonfile')

const argv = require('yargs').argv

const endpoints = {
  simple: 'https://api.graph.cool/simple/v1/cjdnw03hv8l6m01133d2ix1pb',
}

if (!argv.step && !argv.user) {
  console.error(
    'Please provide a step, you are about to delete all data from all users'
  )
  process.exit(1)
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
    allForms${argv.step ? `(filter: { stepId: ${argv.step} })` : ''} {
      id
      stepId
      data
      user {
        id
        name
      }
    }
  }
`

const deleteForm = ({ id }) =>
  client
    .mutate({
      mutation: gql`
        mutation delete($id: ID!) {
          deleteForm(id: $id) {
            id
          }
        }
      `,
      variables: {
        id,
      },
    })
    .then(parse('deleteForm'))

const client = new ApolloClient({
  link: new HttpLink({ uri: endpoints.simple, fetch: fetch }),
  cache: new InMemoryCache(),
})

const filterV1 = d => {
  const shouldFilterV1 = argv.x ? false : true
  if(shouldFilterV1) {
    const { data } = d
    const { value } = data
    if (!value) return false
    return true
  }
  return true
}

const filterUser = d => {
  const { user } = argv
  if (!user) return true
  else return d.user.id === user
}

const store = content =>
  new Promise((resolve, reject) => {
    jsonfile.writeFile('./cache.json', content, err => {
      console.error(
        err
          ? err
          : 'success writing CMS data into cache just in case. PLEASE TAKE CARE OF THIS DATA'
      )
      if (err) reject(err)
      resolve(content)
    })
  })

const filterFormsForDeletion = gcData =>
  gcData.filter(filterV1).filter(filterUser)

client
  .query({
    query: getFormsQuery,
  })
  .then(parse('allForms'))
  .then(filterFormsForDeletion)
  .then(store)
  .then(forms => {
    return Promise.all(
      forms.map(form => {
        const { id } = form
        return deleteForm({ id })
      })
    )
  })
  .catch(e => console.log(e))
