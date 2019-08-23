// @flow
export type Category = {
  name: string,
  key: string,
}

export const categories = {
  CAREER: 'CAREER',
  FINANCES: 'FINANCES',
  AIMS_AND_HOBBIES: 'AIMS_AND_HOBBIES',
  HEALTH: 'HEALTH',
  RELATIONSHIPS: 'RELATIONSHIPS',
  ENVIRONMENT: 'ENVIRONMENT',
  SPIRITUALITY: 'SPIRITUALITY',
}

export const categoriesWithName = [
  {
    name: 'Career',
    key: categories.CAREER,
  },
  {
    name: 'Finances',
    key: categories.FINANCES,
  },
  {
    name: 'Aims and Hobbies',
    key: categories.AIMS_AND_HOBBIES,
  },
  {
    name: 'Health',
    key: categories.HEALTH,
  },
  {
    name: 'Relationships',
    key: categories.RELATIONSHIPS,
  },
  {
    name: 'Environment',
    key: categories.ENVIRONMENT,
  },
  {
    name: 'Spirituality',
    key: categories.SPIRITUALITY,
  },
]

const stepToCategoryMap: Array<Category> = {
  13: {
    name: 'Career',
    key: categories.CAREER,
  },
  14: {
    name: 'Finances',
    key: categories.FINANCES,
  },
  15: {
    name: 'Aims and Hobbies',
    key: categories.AIMS_AND_HOBBIES,
  },
  16: {
    name: 'Health',
    key: categories.HEALTH,
  },
  17: {
    name: 'Relationships',
    key: categories.RELATIONSHIPS,
  },
  18: {
    name: 'Environment',
    key: categories.ENVIRONMENT,
  },
  19: {
    name: 'Spirituality',
    key: categories.SPIRITUALITY,
  },
}

export const getCategories = (completedSteps: Array<any> = []) => {
  const c = completedSteps.reduce((cats, step) => {
    const cat = stepToCategoryMap[step.number]
    if (cat) return [...cats, cat]
    return cats
  }, [])
  return c
}

export const getCategoryName = (category: string) => {
  if (!category) return null
  const cat = categoriesWithName.find(cat => cat.key === category)
  return cat ? cat.name : null
}
