// @flow
import React from 'react'
import GenericGoalsTool from '../GenericGoalsTool'
import { categoriesWithName } from './static/categories'
import { recommendations } from './static/recommendations'
import model, { FORM_KEYS, CHILDREN_KEYS } from './static/form'

const CareerDreams = () => {
  return (
    <GenericGoalsTool
      categories={categoriesWithName}
      recommendations={recommendations}
      model={model}
      FORM_KEYS={FORM_KEYS}
      CHILDREN_KEYS={CHILDREN_KEYS}
    />
  )
}

export default CareerDreams
