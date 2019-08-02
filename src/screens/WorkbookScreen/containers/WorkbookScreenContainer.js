// @flow
import React from 'react'
import { connect } from 'react-redux'
import { compose, mapProps } from 'recompose'
import invariant from 'invariant'
import { userRequired, withNavigationAndStep } from '../../../HOC'
import t from '../../../forms/components'
import { headerBackgrounds } from '../../../resources/images'
import {
  submitFormValue,
  syncFormData,
} from '../../../redux/actions/formData.actions'
import {
  goToWorkbookDoneScreen,
  goToWorkbookScreenWithParams,
} from '../../../redux/actions/nav.actions'
import selectors from '../../../redux/selectors'
import type Props from '../components/WorkbookScreenComponent'
import WorkbookScreenComponent from '../components/WorkbookScreenComponent'

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

const merge = ({
  dispatch,
  modelsAndDataForExercise,
  step,
  formId,
  navigation: { state: { params } },
}): Props => {
  const { models, formData } = modelsAndDataForExercise(step.stepId)

  invariant(
    Object.keys(models).includes(formId),
    `did not find model for formId ${formId} for stepId:${step.stepId}`
  )

  const numberOfForms = Object.keys(models).length
  const formIdIndex = Object.keys(models).indexOf(formId)
  const isFinalForm = numberOfForms - 1 === formIdIndex
  const buttonMessage = isFinalForm ? 'SUBMIT' : 'NEXT'

  const model = models[formId]
  const value = formData[formId]

  const backgroundImage = headerBackgrounds[step.stepId]

  const nextActions = isFinalForm
    ? [
        syncFormData(),
        goToWorkbookDoneScreen({
          params,
        }),
      ]
    : [
        goToWorkbookScreenWithParams({
          ...params,
          formId: Object.keys(models)[formIdIndex + 1],
        }),
      ]

  const next = value => {
    const submit = submitFormValue({
      formId,
      stepId: step.stepId,
      value,
      type: formatType(model.type),
    })
    const actions = [submit, ...nextActions]
    actions.map(action => dispatch(action))
  }

  return {
    stepColor: step.color,
    value,
    model,
    next,
    buttonMessage,
    formId,
    numberOfForms,
    backgroundImage,
  }
}

const mapStateToProps = state => {
  const modelsAndDataForExercise = selectors.modelsAndDataForExercise(state)
  return { modelsAndDataForExercise }
}

const WorkbookScreenContainerWithUser = compose(
  userRequired,
  connect(mapStateToProps),
  withNavigationAndStep,
  mapProps(merge)
)(WorkbookScreenComponent)

export default class WorkbookScreenWrapper extends React.PureComponent {
  render() {
    return <WorkbookScreenContainerWithUser />
  }
}
