// @flow
import React from 'react';
import { HeaderBackButton, NavigationActions } from 'react-navigation';
import screen from './containers/WorkbookScreenContainer';

screen.navigationOptions = ({
  navigation: { dispatch, state: { params } }
}) => {
  const { stepColor, stepNumber } = params;
  return {
    title: `Exercise ${stepNumber}`,
    headerStyle: {
      backgroundColor: stepColor
    },
    headerTintColor: 'white',
    headerLeft: (
      <HeaderBackButton
        tintColor="white"
        onPress={() => dispatch(NavigationActions.back())}
      />
    )
  };
};

export default {
  screen
};
