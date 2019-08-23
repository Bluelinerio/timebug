// @flow
import React, { useCallback, setState, useEffect } from 'react'

export type CategoryLock = {
  category: Category,
  unlockStep: number,
}

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
    unlockStep: [13, 23],
  },
  {
    name: 'Finances',
    key: categories.FINANCES,
    unlockStep: [14, 24],
  },
  {
    name: 'Aims and Hobbies',
    key: categories.AIMS_AND_HOBBIES,
    unlockStep: [15, 25],
  },
  {
    name: 'Health',
    key: categories.HEALTH,
    unlockStep: [16, 26],
  },
  {
    name: 'Relationships',
    key: categories.RELATIONSHIPS,
    unlockStep: [17, 27],
  },
  {
    name: 'Environment',
    key: categories.ENVIRONMENT,
    unlockStep: [18, 28],
  },
  {
    name: 'Spirituality',
    key: categories.SPIRITUALITY,
    unlockStep: [19, 29],
  },
]

export type ProvidedProps = {
  categories: Array<CategoryLock>,
  category: string,
  setCategory: string => void,
  unsetCategory: () => void,
  getCategories: (Array<any>) => Array<CategoryLock>,
  getCategoryName: (string) => string,
}

type Props = {
  children: Array<React.Node>,
  categories: Array<CategoryLock>,
}

const initialState = {
  category: null,
  categories: categoriesWithName,
  setCategory: () => null,
  unsetCategory: () => null,
  getCategories: () => null,
  getCategoryName: () => null,
}

const CategoryContext = React.createContext(initialState)

const CategoryProvider = (props: Props) => {
  const { categories: categoriesFromProps = null } = props
  const [storedCategories, setStoredCategories] = setState(categoriesWithName)

  useEffect(() => {
    if(categoriesFromProps)
      setStoredCategories(categoriesFromProps)
  }, [categoriesFromProps])

  const [category, setCategory] = setState(null)

  const unsetCategory = useCallback(() => {
    setCategory(null)
  }, [])

  const getCategories = useCallback((completedSteps: Array<any> = []) => {
    const c = storedCategories.reduce((cats, lock) => {
      const isUnlocked = lock.unlockStep.find(num => completedSteps.find(s => s.number === num))
      if (isUnlocked) return [...cats, lock]
      return cats
    }, [])
    return c
  }, [])

  const getCategoryName = useCallback((category: string) => {
    if (!category) return null
    const cat = storedCategories.find(cat => cat.key === category)
    return cat ? cat.name : null
  }, [])

  return (
    <CategoryContext.Provider
      value={{
        categories: storedCategories,
        category,
        setCategory,
        unsetCategory,
        getCategories,
        getCategoryName,
      }}
    >
      {this.props.children}
    </CategoryContext.Provider>
  )
}

export { CategoryProvider, CategoryContext }
