// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import invariant from 'invariant'
import t from '../components/templates'

import { headerBackgrounds }   from '../../../resources/images'
import {
  submitFormValue,
  syncFormData
}                              from '../../../redux/actions/formData.actions'
import {
  goToWorkbookDoneScreen,
  goToWorkbookScreenWithParams
}                              from '../../../redux/actions/nav.actions'
import selectors               from '../../../redux/selectors'
import type Props              from '../components/WorkbookScreenComponent'
import WorkbookScreenComponent from '../components/WorkbookScreenComponent'
import DefaultUserContainer    from '../../../containers/DefaultUserContainer'

const formatType = type => {
  const compose = (...fns) => x => fns.reduce((v, fn) => fn(v), x)
  const removeOptional = s => (s.charAt(0) === '?' ? s.substr(1) : s)
  const enter = (sum, key) => ({
    ...sum,
    [key]: compose(removeOptional)(t.getTypeName(type.meta.props[key]))
  })

  return Object.keys(type.meta.props)
    .filter(key => key !== 'id')
    .reduce(enter, {})
}

const mapStateToProps = state => {
  const steps = selectors.steps(state)
  const fetching = selectors.isSynchingFormData(state)
  const modelsAndDataForExercise = selectors.modelsAndDataForExercise(state)
  return { steps, fetching, modelsAndDataForExercise }
}

const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, steps } = stateProps
  const { navigation: { state: { params } } } = ownProps
  const { stepId, formId, stepColor } = params

  invariant(invariant, 'workbook container expected params in naviation')
  invariant(
    stepId && formId && stepColor,
    'workbook container expected stepId && formId && stepColor in params in naviation'
  )

  const { models, formData } = stateProps.modelsAndDataForExercise(stepId)

  invariant(
    Object.keys(models).includes(formId),
    `did not find model for formId ${formId} for stepId:${stepId}`
  )

  const numberOfForms = Object.keys(models).length
  const formIdIndex = Object.keys(models).indexOf(formId)
  const isFinalForm = numberOfForms - 1 === formIdIndex
  const ifFirstForm = formIdIndex === 0
  const buttonMessage = isFinalForm ? 'SUBMIT' : 'NEXT'

  const model = models[formId]
  const value = formData[formId]

  const isFetching = !models ? true : stateProps.network > 0

  const backgroundImage = headerBackgrounds[stepId]

  const nextActions = isFinalForm
    ? [syncFormData(), goToWorkbookDoneScreen(ownProps)]
    : [
        goToWorkbookScreenWithParams({
          ...params,
          formId: Object.keys(models)[formIdIndex + 1]
        })
      ]

  const next = () =>
    nextActions.forEach(action => ownProps.navigation.dispatch(action))

  const submit = value =>
    ownProps.navigation.dispatch(
      submitFormValue({
        formId,
        stepId,
        value,
        type: formatType(model.type)
      })
    )

  return {
    ...ownProps,
    ...dispatchProps,
    stepColor,
    value,
    model,
    next,
    buttonMessage,
    formId,
    numberOfForms,
    isFetching,
    submit,
    backgroundImage
  }
}

const WorkbookScreenContainer = withNavigation(
  connect(mapStateToProps, null, merge)(WorkbookScreenComponent)
)

const WorkbookScreenContainerWithUser = () => (
  <DefaultUserContainer
    renderWithUser={() => <WorkbookScreenContainer />}
    anonymousMessage={
      'You need to be logged in to be able to do the exercises. Please go back and log in again.'
    }
  />
)

export default WorkbookScreenContainerWithUser