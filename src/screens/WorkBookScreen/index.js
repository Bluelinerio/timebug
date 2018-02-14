// @flow
import React from 'react'
import { 
  HeaderBackButton, 
  NavigationActions 
} from 'react-navigation';
import screen from './containers/WorkBookScreenContainer';


screen.navigationOptions = ({ navigation: { dispatch, state: { key, params } } }) => {
  const { stepColor, stepNumber, backAction } = params;
  return {
    title: `Exercise ${stepNumber}`,
    headerStyle: {
      backgroundColor: stepColor
    },
    headerTintColor: 'white',
    headerLeft: (
      <HeaderBackButton
        tintColor="white"
        onPress={ () => {
          backAction 
            ? backAction()
            : dispatch( NavigationActions.back() )
        }}
      />
    )
  };
};

export default {
  screen
}