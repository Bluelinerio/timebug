// @flow
import React from 'react';
import HomeScreen from './components/HomeScreen';
import User from '../../containers/User';
import DefaultIndicator from '../../components/DefaultIndicator.js';

export default () => (
  <User
    renderWithUser={() => <HomeScreen />}
    renderWithAnonymous={() => <HomeScreen />}
    renderWithAuthenticating={() => <DefaultIndicator size="large" />}
    renderWithUndetermined={() => <DefaultIndicator size="large" />}
  />
);
