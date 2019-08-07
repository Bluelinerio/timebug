// @flow
import React, { useContext } from 'react'
import Header from '../components/Header'
import {
  useTitle,
  useSubtitle,
  useBackHandler,
} from '../../hooks/BackButtonHooks'
import { ScreenContext, screens } from '../../context/ScreenContext'
import { CategoryContext, getCategoryName } from '../../context/CategoryContext'
import { GoalContext } from '../../context/GoalContext'

const getBackButtonHandler = (
  screen: string,
  {
    unsetCategory,
    openCategories,
    openGoalList,
    openGoalRecommendations,
    unsetGoal,
  }
) => {
  switch (screen) {
    case screens.GOAL_LIST:
      return () => {
        unsetCategory()
        openCategories()
      }
    case screens.FORM:
      return () => {
        openGoalRecommendations()
      }
    case screens.GOAL_DETAIL:
      return () => {
        unsetGoal()
        openGoalList()
      }
    case screens.GOAL_RECOMMENDATIONS:
      return () => {
        openGoalList()
      }
    default:
      return () => null
  }
}

const HeaderContainer = () => {
  const {
    screen,
    openCategories,
    openGoalList,
    openGoalRecommendations,
  } = useContext(ScreenContext)
  const { category: categoryKey, unsetCategory } = useContext(CategoryContext)
  const { unsetGoal } = useContext(GoalContext)
  const category = getCategoryName(categoryKey)
  const title = useTitle(screen, null) //TODO: ADD GOAL
  const subtitle = useSubtitle(screen, category)
  const [showBackButton] = useBackHandler(screen)
  const onBack = getBackButtonHandler(screen, {
    unsetCategory,
    openCategories,
    openGoalList,
    openGoalRecommendations,
    unsetGoal,
  })
  return (
    <Header
      title={title}
      subtitle={subtitle}
      onBack={onBack}
      showBackButton={showBackButton}
    />
  )
}

export default HeaderContainer
