//@flow
import * as React from 'react'
import { connect } from 'react-redux'
import LoginWithFbButtonContainer from '../../../containers/LoginWithFbButtonContainer'
import BeginExerciseButtonContainer from './BeginExerciseButtonContainer'
import SmallLoadingIndicator from '../../../components/SmallLoadingIndicator'
import combineSelectors from '../../../redux/selectors/combineSelectors';
import userSelectors from '../../../redux/selectors/user.selectors';

type Props = {
  isLoggedIn: boolean,
  needsLogin: boolean,
}

const StepScreenButtonContainer = connect(
  combineSelectors(userSelectors)
)(({
  isLoggedIn,
  needsLogin,
} : Props ) => (
  isLoggedIn
  ? <BeginExerciseButtonContainer />
    : needsLogin
      ? <LoginWithFbButtonContainer/>
      : <SmallLoadingIndicator message={'Authenticating'} />
  )
)

export default StepScreenButtonContainer
