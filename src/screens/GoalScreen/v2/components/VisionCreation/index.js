import React from 'react'
import CategoryListContainer from './containers/CategoryListContainer'

const SelfAssessmentComponent = props => {
  return <CategoryListContainer {...props} />
}

export default React.memo(SelfAssessmentComponent)
