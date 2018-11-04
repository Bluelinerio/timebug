// @flow
import React from 'react'
import { connect } from 'react-redux'
import GoalList from '../components/GoalList'
import { GoalType } from '../forms/goals'

const mapStateToProps = () => {
  return {
    goalTypes: GoalType
  }
}

const GoalListContainer = ownProps => {
  const props = mapStateToProps()
  return <GoalList {...ownProps} {...props} />
}
export default GoalListContainer
