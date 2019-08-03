import React, { useContext } from 'react'
import { CategoryContext } from '../../context/CategoryContext'
import { ToolDataContext } from '../../context/ToolDataProvider'
import List from '../components/ListComponent'

const ListContainer = () => {
  const { category } = useContext(CategoryContext)
  const { tool, data } = useContext(ToolDataContext)
  return <List category={category} tool={tool} data={data} />
}

export default ListContainer
