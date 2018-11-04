// @flow
import React from 'react'
import GoalList from '../components/GoalList'
import { GoalType } from '../forms/goals'

const mapStateToProps = (): { goalTypes: Array<String> } => {
  return {
    goalTypes: GoalType
  }
}

const GoalListContainer = ownProps => {
  const props = mapStateToProps()
  return <GoalList {...ownProps} {...props} />
}
export default GoalListContainer
