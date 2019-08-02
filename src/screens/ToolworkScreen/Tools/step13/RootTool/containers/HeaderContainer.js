import React, { useContext } from 'react'
import Header from '../components/Header'
import {
  useTitle,
  useSubtitle,
  useBackHandler,
} from '../../hooks/BackButtonHooks'
import { ScreenContext } from '../../context/ScreenContext'
import { CategoryContext } from '../../context/CategoryContext'

const HeaderContainer = () => {
  const { screen, openCategories, openGoalList } = useContext(ScreenContext)
  const { category, unsetCategory } = useContext(CategoryContext)
  const title = useTitle(screen, null) //TODO: ADD GOAL
  const subtitle = useSubtitle(screen, category)
  const [onBack, showBackButton] = useBackHandler(screen, {
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
