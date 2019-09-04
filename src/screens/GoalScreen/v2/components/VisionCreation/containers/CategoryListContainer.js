// @flow
import React, { useMemo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import CategoryList from '../components/CategoryList'
import selectors from '2020_redux/selectors'
import { getUnlockedTools } from '2020_services/tools'
import { TOOL_KEYS } from '2020_static/tools'
import { getCategories } from '../static/Categories'

const CategoryListContainer = () => {
  const completedSteps = useSelector(selectors.getCompletedSteps, shallowEqual)
  const categories = getCategories(completedSteps)

  const unlockedTools = useMemo(
    () => {
      return getUnlockedTools(completedSteps)
    },
    [completedSteps]
  )

  const tool = useMemo(
    () => {
      return unlockedTools.find(t => t.key === TOOL_KEYS.VisionCreationDreamsTrackerKey)
    },
    [unlockedTools]
  )

  return <CategoryList categories={categories} tool={tool} />
}

export default CategoryListContainer
