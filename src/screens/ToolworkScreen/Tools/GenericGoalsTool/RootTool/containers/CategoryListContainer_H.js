// @flow
import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import CategoryList from '../components/CategoryList'
import selectors from '2020_redux/selectors'
import { getCategories } from '../../context/CategoryContext'

const CategoryListContainer = () => {
  const completedSteps = useSelector(selectors.getCompletedSteps, shallowEqual)
  const categories = getCategories(completedSteps)
  return (
    <CategoryList
      categories={categories}
    />
  )
}

export default CategoryListContainer
