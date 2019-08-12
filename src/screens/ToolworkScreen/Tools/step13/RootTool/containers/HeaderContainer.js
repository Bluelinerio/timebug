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
    openBacklog,
    openDeletedBacklog,
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
    case screens.BACKLOG:
    case screens.DELETED_BACKLOG:
      return () => {
        openCategories()
      }
    case screens.BACKLOG_GOAL_DETAILS:
      return () => {
        openBacklog()
      }
    case screens.DELETED_GOAL_BACKLOG_DETAILS:
      return () => {
        openDeletedBacklog()
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
    openBacklog,
    openDeletedBacklog,
  } = useContext(ScreenContext)
  const { category: categoryKey, unsetCategory } = useContext(CategoryContext)
  const { unsetGoal, goal } = useContext(GoalContext)
  const category = getCategoryName(categoryKey)
  const title = useTitle(screen, goal)
  const subtitle = useSubtitle(screen, category)
  const [showBackButton] = useBackHandler(screen)
  const onBack = getBackButtonHandler(screen, {
    unsetCategory,
    openCategories,
    openGoalList,
    openGoalRecommendations,
    unsetGoal,
    openBacklog,
    openDeletedBacklog,
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
