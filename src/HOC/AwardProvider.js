//@flow
import { connect } from 'react-redux'
import selectors from '../redux/selectors'
import {
  submitAwardAnswers,
  resetAward,
  SubmitAwardValuePayload
} from '../redux/actions/award.actions'

const mapStateToProps = state => {
  const awardModelAndDataForStep = selectors.awardModelAndDataForStep(state)
  return { awardModelAndDataForStep }
}

const mapDispatchToProps = dispatch => ({
  submitAnswers: (payload: SubmitAwardValuePayload) =>
    dispatch(submitAwardAnswers(payload)),
  reset: () => dispatch(resetAward())
})

const merge = (stateProps, dispatchProps, ownProps) => {
  const { awardModelAndDataForStep } = stateProps
  const { step } = ownProps
  const { data, model } = awardModelAndDataForStep(step)
  if (model && data) {
    return {
      ...ownProps,
      ...dispatchProps,
      model,
      data
    }
  }
  return {
    ...ownProps,
    ...dispatchProps
  }
}

export default connect(mapStateToProps, mapDispatchToProps, merge)
