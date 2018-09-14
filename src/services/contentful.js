// @flow
// testing the API : https://npm.runkit.com/contentful
import { createClient } from 'contentful'
import type { Icon } from './cms'
export const CONTENTFUL_CREDENTIALS = {
  accessToken:
    '65a618b02639a9c34ec36c573e06611e3568354171e02f72fbd96adbe83f50d3',
  space: '6h184bey8vl3'
}

//old:
//accessToken:
//'c139e7f2a7a86fc0813e71fbb18bb7b1921189ce4d7cc58c7f0ccc0022adee5f',
//space: '1gbed7lrsmj4'

export const CONTENTFUL_CONTENT_STEP = 'day'
export const CONTENTFUL_CONTENT_COLORS = 'colors'
export const CONTENTFUL_ONBOARDING_PAGE = 'onboardingPage'
export const CONTENTFUL_PAGE = 'page'

export const contentfulClient = createClient(CONTENTFUL_CREDENTIALS)

const getImageUrl = (icon: Icon): { uri: string } => ({
  uri: (icon.url || icon.fields.file.url || '').replace('//', 'https://')
})

const pagesFromResponse = response => ({
  pages: response.items
    .map(i => i.fields)
    .filter(p => !!p.name)
    .reduce(
      (items, { name, title, content }) => ({
        ...items,
        [name]: {
          title,
          content
        }
      }),
      {}
    )
})

const onboardingPagesFromResponse = response => {
  const mapOnboardingSlide = ({ fields: { title, description, image } }) => ({
    title,
    description,
    image: image ? getImageUrl(image) : null
  })
  return {
    onboardingPages: response.items.reduce(
      (items, { fields: { name, slides, title } }) => ({
        ...items,
        [name]: {
          title,
          slides: slides.map(mapOnboardingSlide)
        }
      }),
      {}
    )
  }
}

const unlinkFields = name => response => ({
  [name]: response.items.map(i => i.fields)
})

const colorsFromResponse = response => ({
  colors: response.items[0].fields.schema
})

const stepsFromResponse = unlinkFields('steps')

const nomrmalizeSteps = ({ steps, colors }) => ({
  steps: steps.reduce(
    (sum, step) => ({
      ...sum,
      [step.number]: {
        ...step,
        refAssignment: [],
        assignments: step.refAssignment.map(i => ({
          ...i.fields,
          icon: i.icon ? getImageUrl(i.icon) : null
        })),
        icon: step.icon ? getImageUrl(step.icon) : null,
        stepId: step.number.toString(),
        workbookDurationMin: step.workbookDurationMin || 15,
        duration: step.duration || 15,
        color: colors.steps[step.number]
      }
    }),
    {}
  )
})

export const fetchColors = () =>
  contentfulClient
    .getEntries({ content_type: CONTENTFUL_CONTENT_COLORS })
    .then(colorsFromResponse)

export const fetchSteps = () =>
  contentfulClient
    .getEntries({ content_type: CONTENTFUL_CONTENT_STEP })
    .then(stepsFromResponse)

export const fetchonboardingPages = () =>
  contentfulClient
    .getEntries({ content_type: CONTENTFUL_ONBOARDING_PAGE })
    .then(onboardingPagesFromResponse)

export const fetchPages = () =>
  contentfulClient
    .getEntries({ content_type: CONTENTFUL_PAGE })
    .then(pagesFromResponse)

export const refreshCMS = () =>
  Promise.all([
    fetchSteps(),
    fetchColors(),
    fetchPages(),
    fetchonboardingPages()
  ])
    .then(responses => Object.assign(...responses))
    .then(cmsData => ({
      ...cmsData,
      ...nomrmalizeSteps(cmsData)
    }))

export const testContentFromCMS = object => {
  if (!object.colors.steps) {
    throw 'failed validating contenful response'
  }
  if (!object.colors.phases) {
    throw 'failed validating contenful response'
  }
  const steps = Object.values(object.steps)
  if (steps.length !== 30) {
    throw 'failed validating contenful response'
  }
  for (let index = 1; index < 31; index++) {
    const number = index.toString()
    const step = object.steps[number]
    if (!step) {
      throw `failed validating contenful response step ${index}`
    }
  }
  return object
}
