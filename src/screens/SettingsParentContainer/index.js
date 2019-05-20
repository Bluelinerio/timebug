// @flow
import React                    from 'react'
import SettingsParentComponent from './containers/SettingsParentContainer'
import User                     from '2020_containers/User'
import DefaultIndicator         from '2020_components/DefaultIndicator'


const SettingsParentScreen = () => {
  return (
    <User
      renderWithUser={() => <SettingsParentComponent />}
      renderWithAnonymous={() => <SettingsParentComponent />}
      renderWithAuthenticating={() => <DefaultIndicator size="large" />}
      renderWithUndetermined={() => <DefaultIndicator size="large" />}
    />
  )
}

export default SettingsParentScreen
