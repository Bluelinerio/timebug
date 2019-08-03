// @flow
import React, { useContext } from 'react'
import Header from '../components/Header'
import {
  useTitle,
  useSubtitle,
  useBackHandler,
} from '../../hooks/BackButtonHooks'
import { ScreenContext, screens } from '../../context/ScreenContext'
import { CategoryContext } from '../../context/CategoryContext'

const getBackButtonHandler = (
  screen: string,
  { unsetCategory, openCategories, openGoalList }
) => {
  switch (screen) {
    case screens.GOAL_LIST:
      return () => {
        unsetCategory()
        openCategories()
      }
    case screens.FORM:
      return () => {
        openGoalList()
      }
    case screens.GOAL_DETAIL:
      return () => {
        // fns.unsetGoal()
        openGoalList()
      }
    default:
      return () => null
  }
}

const HeaderContainer = () => {
  const { screen, openCategories, openGoalList } = useContext(ScreenContext)
  const { category, unsetCategory } = useContext(CategoryContext)
  const title = useTitle(screen, null) //TODO: ADD GOAL
  const subtitle = useSubtitle(screen, category)
  const [showBackButton] = useBackHandler(screen)
  const onBack = getBackButtonHandler(screen, {
    unsetCategory,
    openCategories,
    openGoalList,
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
