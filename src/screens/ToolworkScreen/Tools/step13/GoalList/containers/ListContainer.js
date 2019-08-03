import React, { useContext } from 'react'
import { CategoryContext } from '../../context/CategoryContext'
import { ToolDataContext } from '../../context/ToolDataProvider'
import List from '../components/ListComponent'

const dummyGoals = [
  {
    name: 'dummyGoal1',
    id: 1,
  },
  {
    name: 'dummyGoal2',
    id: 2,
  },
  {
    name: 'dummyGoal3dummyGoal3dummyGoal3dummyGoal3dummyGoal3',
    id: 3,
  },
]

const ListContainer = () => {
  const { category } = useContext(CategoryContext)
  const { tool, data } = useContext(ToolDataContext)
  return <List category={category} tool={tool} data={data} goals={dummyGoals} />
}

export default ListContainer
