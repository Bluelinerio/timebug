//@flow
import * as React from 'react'
import User from '../../../containers/User'
import LoginWithFbButtonContainer from '../../../containers/LoginWithFbButtonContainer'
import BeginExerciseButtonContainer from './BeginExerciseButtonContainer'
import SmallLoadingIndicator from '../../../components/SmallLoadingIndicator'

const StepScreenButtonContainer = () => (
  <User
    renderWithUser={() => <BeginExerciseButtonContainer />}
    renderWithAuthenticating={() => (
      <SmallLoadingIndicator message={'Authenticating'} />
    )}
    renderWithUndetermined={() => <SmallLoadingIndicator />}
    renderWithAnonymous={() => <LoginWithFbButtonContainer />}
  />
)

export default StepScreenButtonContainer
