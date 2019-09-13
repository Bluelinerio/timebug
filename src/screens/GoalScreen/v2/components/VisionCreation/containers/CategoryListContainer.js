// @flow
import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import CategoryList from '../components/CategoryList'
import selectors from '2020_redux/selectors'
import { getCategories } from '../static/Categories'

type Props = {
  data: any,
  tool: any,
}

const CategoryListContainer = (props: Props) => {
  const completedSteps = useSelector(selectors.getCompletedSteps, shallowEqual)
  const categories = getCategories(completedSteps)

  return <CategoryList categories={categories} {...props} />
}

export default CategoryListContainer
