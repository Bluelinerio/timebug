// @flow
import { connect } from 'react-redux'
import { compose, mapProps } from 'recompose'
import { withNavigation } from 'react-navigation'
import WorkbookForm from '../components/WorkbookForm'
import selectors from '../../../../redux/selectors'
import models from '../../../../forms/custom/forms'
import {
  submitFormValue,
  syncFormData,
} from '../../../../redux/actions/formData.actions.js'
import { handleStep30BaseValues } from '../utils/baseValues/step30'
import { stepEnum } from '2020_services/cms'
import type { SubmitAction } from '../../../../redux/actions/formData.actions.js'

const mapStateToProps = (state: any) => {
  const data = selectors.formData(state)
  return {
    data,
    models,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    submitForm: (payload: SubmitAction) => {
      dispatch(submitFormValue(payload))
      dispatch(syncFormData())
    },
  }
}

const mapBaseValues = (
  baseValues: any | null,
  formData: any,
  stepNumber: number
) => {
  switch (stepNumber) {
    case stepEnum.STEP_30:
      return handleStep30BaseValues(baseValues, formData)
    default:
      return baseValues
  }
}

const merge = ({
  submitForm,
  data,
  stepNumber,
  navigation,
  editionId,
  ...props
}) => {
  const model = models[stepNumber]
  const formData = (data[stepNumber] && data[stepNumber].value) || null
  const base = navigation.getParam('valuesForForm', null)
  const baseValues = mapBaseValues(base, data, stepNumber)
  const step2Finished = data ? !!data[stepEnum.STEP_2] : false
  const step30Finished = data ? !!data[stepEnum.STEP_30] : false
  return {
    ...props,
    data: formData,
    model,
    stepNumber,
    submitForm,
    editionId,
    navigation,
    baseValues,
    extra: {
      step2Finished,
      step30Finished,
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigation,
  mapProps(merge)
)(WorkbookForm)
