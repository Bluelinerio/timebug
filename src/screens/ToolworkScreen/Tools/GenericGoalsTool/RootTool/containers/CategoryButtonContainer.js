// @flow
import React, { useContext } from 'react'
import CategoryButton from '../components/CategoryButton'
import { CategoryContext, Category } from '../../context/CategoryContext'
import { ScreenContext } from '../../context/ScreenContext'

type Props = {
  category: Category,
}

const CategoryButtonContainer = (props: Props) => {
  const { category } = props
  const { setCategory } = useContext(CategoryContext)
  const { openGoalList } = useContext(ScreenContext)
  return (
    <CategoryButton
      category={category.name}
      categoryKey={category.key}
      setCategory={setCategory}
      openGoalList={openGoalList}
    />
  )
}

export default CategoryButtonContainer
