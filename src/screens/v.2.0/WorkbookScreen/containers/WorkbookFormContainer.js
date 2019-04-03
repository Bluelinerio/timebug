import { connect }           from 'react-redux'
import { compose, mapProps } from 'recompose'
import { withNavigation }    from 'react-navigation'
import WorkbookForm          from '../components/WorkbookForm'
import selectors             from '../../../../redux/selectors'
import models                from '../../../../forms/custom/forms'
import {
  submitFormValue,
  syncFormData,
}                            from '../../../../redux/actions/formData.actions.js'
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

const merge = ({ submitForm, data, stepNumber, navigation, ...props }) => {
  const model = models[stepNumber]
  const navigationState = navigation.state
  const params = navigationState.params || {}
  const formIndexToEdit = params.editionIndex || null
  const formData = (data[stepNumber] && data[stepNumber].value) || null
  return {
    ...props,
    data: formData,
    model,
    stepNumber,
    submitForm,
    formIndexToEdit,
    navigation,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigation,
  mapProps(merge)
)(WorkbookForm)
