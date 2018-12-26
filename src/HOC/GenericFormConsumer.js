//@flow
import R           from 'ramda'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import selectors   from '../redux/selectors'

type ModelsAndData = {
  models: any,
  formData: any,
}

type ModelsAndDataCall = (stepId: string) => ModelsAndData

type FormConsumerProps = {
  modelsAndDataForExercise: ModelsAndDataCall,
  allStepsFormData: any,
}

export type FormDataForExercise = {
  formData: any,
}

export type HandlerFunction = (obj: FormDataForExercise) => any

const mapStateToProps = (state: any): FormConsumerProps => {
  const allStepsFormData = selectors.formData(state)
  return { allStepsFormData }
}

const notEmpty = compose(R.not, R.isEmpty)

const merge = (stateProps, dispatchProps, ownProps) => {
  const { allStepsFormData } = stateProps
  const { step } = ownProps
  const formData = allStepsFormData[step] && allStepsFormData[step].value
  if (formData && notEmpty(formData)) {
    return {
      ...ownProps,
      formData,
    }
  }
  return {
    ...ownProps,
  }
}

export default connect(mapStateToProps, null, merge)
