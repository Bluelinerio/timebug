// @flow
import React, { useContext }         from 'react'
import CategoryButton                from '../components/CategoryButton'
import { CategoryContext, Category } from '../../context/CategoryContext'
import { ScreenContext }             from '../../context/ScreenContext'
import { StyleContext }              from '../../context/StyleContext'
import { useIcon }                   from '../../hooks/iconHooks'

type Props = {
  category: Category,
}

const CategoryButtonContainer = (props: Props) => {
  const { category } = props
  const { setCategory } = useContext(CategoryContext)
  const { openGoalList } = useContext(ScreenContext)
  const { iconStyle } = useContext(StyleContext)
  const iconName = useIcon(category.key)

  return (
    <CategoryButton
      category={category.name}
      categoryKey={category.key}
      setCategory={setCategory}
      openGoalList={openGoalList}
      iconStyle={iconStyle}
      iconName={iconName}
    />
  )
}

export default CategoryButtonContainer
