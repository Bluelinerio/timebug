import React, { useContext } from 'react'
import OptionsList from '../components/OptionsList'
import { RecommendationsContext } from '../../context/RecommendationsContext'
import { CategoryContext } from '../../context/CategoryContext'

const OptionsListContainer = () => {
  const { category } = useContext(CategoryContext)
  const { getRecommendationsForCategory } = useContext(RecommendationsContext)

  const options = getRecommendationsForCategory(category)

  return <OptionsList options={options} />
}

export default OptionsListContainer
