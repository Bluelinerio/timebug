// @flow
import React                    from 'react'
import DashboardScreenContainer from './containers/DashboardScreenContainer'
import User                     from '2020_containers/User'
import DefaultIndicator         from '2020_components/DefaultIndicator'

const DashboardScreen = () => {
  return (
    <User
      renderWithUser={() => <DashboardScreenContainer />}
      renderWithAnonymous={() => <DashboardScreenContainer />}
      renderWithAuthenticating={() => <DefaultIndicator size="large" />}
      renderWithUndetermined={() => <DefaultIndicator size="large" />}
    />
  )
}
export default DashboardScreen
