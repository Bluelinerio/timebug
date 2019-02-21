import { connect }                from 'react-redux'
import { compose }                from 'recompose'
import GoalScreenHandlerComponent from '../components/GoalScreenHandlerComponent'
import selectors                  from '2020_redux/selectors'
import FormHOC                    from '../../../HOC/GenericFormConsumer'

const STEP_NUMBER = '5'

const mapStateToProps = (state: any) => {
  const formData = selectors.formData(state)
  const getFormData = (step: string) => {
    return formData[step] || null
  }
  return {
    getFormData,
  }
}

const mergeProps = stateProps => {
  const { getFormData } = stateProps
  const data = getFormData(STEP_NUMBER)
  return {
    data,
  }
}

export default compose(FormHOC, connect(mapStateToProps, null, mergeProps))(
  GoalScreenHandlerComponent
)
