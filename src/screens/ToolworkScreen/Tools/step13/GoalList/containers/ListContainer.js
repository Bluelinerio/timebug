// @flow
import React, { useContext } from 'react'
import {
  CategoryContext,
} from '../../context/CategoryContext'
import { useGoals } from '../../hooks/GoalHooks'
import List from '../components/ListComponent'

const ListContainer = () => {
  const { category } = useContext(CategoryContext)
  const goals = useGoals(category)
  return <List category={category} goals={goals} />
}

export default ListContainer
