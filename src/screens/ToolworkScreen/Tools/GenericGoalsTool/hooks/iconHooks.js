// @flow
import { useContext }      from 'React'
import { CategoryContext } from '../context/CategoryContext'

export const useIcon = (category: string) => {
  const { categories } = useContext(CategoryContext)

  const cat = categories.find(c => c.key === category)

  return cat ? cat.icon : null
}