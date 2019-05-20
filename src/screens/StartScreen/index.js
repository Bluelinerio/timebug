// @flow
import React                from 'react'
import StartScreenComponent from './components/StartScreenComponent'
import User                 from '2020_containers/User'
import DefaultIndicator     from '2020_components/DefaultIndicator'

/**
 * Ui reducer screen key
 */
export const screenKey = 'StartScreen'

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
