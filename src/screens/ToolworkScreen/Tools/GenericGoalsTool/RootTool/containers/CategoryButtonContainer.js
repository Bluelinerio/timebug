// @flow
import React, { useContext } from 'react'
import CategoryButton from '../components/CategoryButton'
import { CategoryContext, Category } from '../../context/CategoryContext'
import { ScreenContext } from '../../context/ScreenContext'
import { StyleContext } from '../../context/StyleContext'
import { useIcon } from '../../hooks/iconHooks'
import { useGoals } from '../../hooks/GoalHooks'

type Props = {
  category: Category,
}

const CategoryButtonContainer = (props: Props) => {
  const { category } = props
  const { setCategory } = useContext(CategoryContext)
  const { openGoalList } = useContext(ScreenContext)
  const { iconStyle, color } = useContext(StyleContext)
  const iconName = useIcon(category.key)
  const goals = useGoals(category.key)

  const goalCount = goals ? goals.length : 0

  return (
    <CategoryButton
      category={category.name}
      categoryKey={category.key}
      setCategory={setCategory}
      openGoalList={openGoalList}
      iconStyle={iconStyle}
      iconName={iconName}
      color={color}
      goalCount={goalCount}
    />
  )
}

export default CategoryButtonContainer
