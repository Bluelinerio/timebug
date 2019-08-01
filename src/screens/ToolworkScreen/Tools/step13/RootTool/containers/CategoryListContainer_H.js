// @flow
import React from 'react'
import CategoryList from '../components/CategoryList'
import { getCompletedSteps } from '2020_redux/selectors'
import { shallowEqual, useSelector } from 'react-redux'

const categories = {
  13: 'Career',
  14: 'Finances',
  15: 'Aims and Hobbies',
  16: 'Health',
  17: 'Relationships',
  18: 'Environment',
  19: 'Spirituality',
}

const getCategories = (completedSteps: Array<any> = []) => {
  const c = completedSteps.reduce((cats, step) => {
    const cat = categories[step.number]
    if (cat) return [...cats, cat]
    return cats
  }, [])
  return c
}

const CategoryListContainer = () => {
  const completedSteps = useSelector(getCompletedSteps, shallowEqual)
  const categories = getCategories(completedSteps)
  return <CategoryList categories={categories} />
}

export default CategoryListContainer
