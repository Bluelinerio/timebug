// @flow
import React from 'react'
import { StyleSheet } from 'react-native';
import { HeaderBackButton } from "react-navigation";
import { NavigationActions } from 'react-navigation';

import screen                 from './containers/WorkBookScreenContainer';
import { previousFormOrBack } from '../../redux/actions/nav.actions';

screen.navigationOptions = ({ navigation: { previous, dispatch, state: { key, params } } }) => {
  const { color, form, step } = params;
  return {
    title: `Workbook #${step}`,
    headerStyle: {
      backgroundColor: color
    },
    headerTintColor: 'white',
    headerLeft: (
      <HeaderBackButton
        tintColor="white"
        onPress={() => {
          if (!form || form === 0) {
            dispatch(NavigationActions.back())
          } else {
            dispatch(NavigationActions.setParams({
              key,
              params: {
                ...params,
                form: form - 1
              }
            }))
          }
        }}
      />
    )
  };
};

export default {
  screen
}