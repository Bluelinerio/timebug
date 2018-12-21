import { connect }           from 'react-redux'
import WorkbookForm          from '../components/WorkbookForm'
import selectors             from '../../../../redux/selectors'
import models                from '../../../../forms/custom/forms'
import { compose, mapProps } from 'recompose'
import { submitFormValue }   from '../../../../redux/actions/formData.actions.js'
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
    submitForm: (payload: SubmitAction) => dispatch(submitFormValue(payload)),
  }
}

const merge = ({ submitForm, step, data }) => {
  const model = models[step]
  const formData = data[step]
  return {
    ...props,
    data: formData,
    model,
    stepNumber,
    submitForm,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(merge)
)(WorkbookForm)
