// @flow
import React from 'react'
import GoalStepScreenComponent from '../components/GoalStepScreenComponent'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import t from '../../../forms/components'
import { compose, mapProps } from 'recompose'
import models from '../goalForms'
import tron from 'reactotron-react-native'
import {
  UpdateGoalStep,
  SyncGoalSteps,
} from '../../../redux/actions/goals.actions'
import { goBack } from '../../../redux/actions/nav.actions'
import selectors from '../../../redux/selectors'

const formatType = type => {
  const compose = (...fns) => x => fns.reduce((v, fn) => fn(v), x)
  const removeOptional = s => (s.charAt(0) === '?' ? s.substr(1) : s)
  const enter = (sum, key) => ({
    ...sum,
    [key]: compose(removeOptional)(t.getTypeName(type.meta.props[key])),
  })

  return Object.keys(type.meta.props)
    .filter(key => key !== 'id')
    .reduce(enter, {})
}

type Dispatchable = (payload: any) => any

const callWithObj = (fn: Array<Dispatchable>) => (payload: any) =>
  fn.map(f => {
    f(payload)
  })
const mapDispatchToProps = (dispatch: any) => {
  const updateGoalStep = (payload: GoalStepPayload) =>
    dispatch(UpdateGoalStep(payload))
  const syncGoalSteps = (payload: GoalStepPayload) =>
    dispatch(SyncGoalSteps(payload))
  const back = () => dispatch(goBack())
  const onPress = callWithObj([updateGoalStep, syncGoalSteps, back])
  return {
    onPress,
  }
}

const mapStateToProps = (state: any): { goalsData: any } => {
  const goalsData = selectors.getGoalsData(state)
  return {
    goalsData,
  }
}

const merge = ({ onPress, goalsData, navigation: { state: { params } } }) => {
  const { goalId, formId } = params
  tron.log(goalsData)
  const model = models[formId]
  const value = selectors.getGoalsStepsForGoalAndFormStateless(
    goalsData,
    `${goalId}`,
    `${formId}`
  )
  return {
    goalId,
    formId,
    type: formatType(model.type),
    onPress,
    model,
    value,
  }
}

const GoalStepContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigation,
  mapProps(merge)
)(GoalStepScreenComponent)

export default class GoalStepWrapper extends React.PureComponent {
  render() {
    return <GoalStepContainer />
  }
}
