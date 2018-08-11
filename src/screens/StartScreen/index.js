// @flow
import React                from 'react'
import StartScreenComponent from './components/StartScreenComponent'
import User                 from '../../containers/User'
import DefaultIndicator     from '../../components/DefaultIndicator'

const StartScreenContainer = () => {
  return (
    <User
      renderWithUser={() => <StartScreenComponent />}
      renderWithAnonymous={() => <StartScreenComponent />}
      renderWithAuthenticating={() => <DefaultIndicator size="large" />}
      renderWithUndetermined={() => <DefaultIndicator size="large" />}
    />
  )
}
export default StartScreenContainer
