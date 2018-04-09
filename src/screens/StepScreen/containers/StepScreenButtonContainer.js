//@flow
import * as React from 'react'
import { View, ActivityIndicator } from 'react-native'
import User from '../../../containers/User'
import LoginWithFbButtonContainer from '../../../containers/LoginWithFbButtonContainer'
import BeginExerciseButtonContainer from './BeginExerciseButtonContainer'

const LoadingIndicator = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <ActivityIndicator />
  </View>
)

const StepScreenButtonContainer = () => (
  <User
    renderWithUser={() => <BeginExerciseButtonContainer />}
    renderWithAuthenticating={() => <LoadingIndicator />}
    renderWithUndetermined={() => <LoadingIndicator />}
    renderWithAnonymous={() => <LoginWithFbButtonContainer />}
  />
)

export default StepScreenButtonContainer
