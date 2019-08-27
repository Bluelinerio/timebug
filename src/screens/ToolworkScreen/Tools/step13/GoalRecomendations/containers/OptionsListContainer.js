import React, { useContext } from 'react'
import OptionsList from '../components/OptionsList'
import { recommendations } from '../static/recommendations'
import { CategoryContext } from '../../context/CategoryContext'

const OptionsListContainer = () => {
  const { category } = useContext(CategoryContext)
  const options = recommendations[category]

  return <OptionsList options={options} />
}

export default OptionsListContainer
