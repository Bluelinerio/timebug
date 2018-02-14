import * as React               from 'react'
import {
  View,
  Text
} from 'react-native';

import User                     from './User';
import { 
  AUTHENTICATING,
  UNDETERMIND,
  ANONYMOUS,
} from '../services/apollo/models';
import DefaultIndicator         from '../components/DefaultIndicator';
import ErrorComponent           from '../components/Error'

export default ({ renderWithUser, anonymousMessage, navigationOptions }) => (
  <User 
    renderWithState={ state => {
      switch(state) {
        case ANONYMOUS:
          const Component = ErrorComponent;
          if(navigationOptions) {
            Component.navigationOptions = navigationOptions
          }
          return (
            <Component 
              message={anonymousMessage || 'You need to be logged in to be user this screen.'} 
            />
          )
        case UNDETERMIND:
        case AUTHENTICATING:
        default:
          return <DefaultIndicator />

      }
    }}
    renderWithUser={renderWithUser}
  />
)