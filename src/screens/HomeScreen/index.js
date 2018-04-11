// @flow
import React               from 'react'
import HomeScreenComponent from './components/HomeScreenComponent'
import User                from '../../containers/User'
import DefaultIndicator    from '../../components/DefaultIndicator.js'

const HomeScreenContainer = () => (
  <User
    renderWithUser={() => <HomeScreenComponent />}
    renderWithAnonymous={() => <HomeScreenComponent />}
    renderWithAuthenticating={() => <DefaultIndicator size="large" />}
    renderWithUndetermined={() => <DefaultIndicator size="large" />}
  />
)
export default HomeScreenContainer
