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
  23: {
    name: 'Career',
    key: categories.CAREER,
  },
  24: {
    name: 'Finances',
    key: categories.FINANCES,
  },
  25: {
    name: 'Aims and Hobbies',
    key: categories.AIMS_AND_HOBBIES,
  },
  26: {
    name: 'Health',
    key: categories.HEALTH,
  },
  27: {
    name: 'Relationships',
    key: categories.RELATIONSHIPS,
  },
  28: {
    name: 'Environment',
    key: categories.ENVIRONMENT,
  },
  29: {
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
