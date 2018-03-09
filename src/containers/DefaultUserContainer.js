import * as React                 from 'react';
import User                       from './User';
import {
  AUTHENTICATING,
  UNDETERMIND,
  ANONYMOUS
}                                 from '../services/apollo/models';
import DefaultIndicator           from '../components/DefaultIndicator';
import ErrorComponent             from '../components/Error';
import UserAnonymousError         from './UserAnonymousError'

export default ({ renderWithUser, anonymousMessage, navigationOptions }) => (
  <User
    renderWithState={state => {
      switch (state) {
        case ANONYMOUS: 
          return <UserAnonymousError />
        case UNDETERMIND:
        case AUTHENTICATING:
        default:
          return <DefaultIndicator />;
      }
    }}
    renderWithUser={renderWithUser}
  />
);

