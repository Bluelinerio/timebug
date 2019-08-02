import React, { useContext } from 'react'
import { CategoryContext } from '../../context/CategoryContext'
import GoalList from '../components/GoalListComponent'

const GoalListContainer = () => {
  const { category } = useContext(CategoryContext)

  return <GoalList category={category} />
}

export default GoalListContainer