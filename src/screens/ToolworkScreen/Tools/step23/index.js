// @flow
import React                                           from 'react'
import GenericGoalsTool                                from '../GenericGoalsTool'
import { categoriesWithName }                          from './static/categories'
import { recommendations }                             from './static/recommendations'
import model, { FORM_KEYS_PROXY, CHILDREN_KEYS_PROXY } from './static/form'
import { VISION_CREATION }                             from '2020_services/cms'

const CareerDreams = (props: any) => {
  return (
    <GenericGoalsTool
      categories={categoriesWithName}
      recommendations={recommendations}
      model={model}
      FORM_KEYS={FORM_KEYS_PROXY}
      CHILDREN_KEYS={CHILDREN_KEYS_PROXY}
      phase={VISION_CREATION}
      {...props}
    />
  )
}

export default CareerDreams
