import React from 'react';
import { StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import screen from './containers/StepScreenContainer';
import HeaderCloseButton from '../../components/HeaderCloseButton'

// look at the 'styles' in react-navigation/src/views/Header/Header.js
const headerStyle = { 
  position: 'absolute', 
  backgroundColor: 'transparent', 
  zIndex: 100, 
  top: 0, 
  left: 0, 
  right: 0, 
  borderBottomColor: 'transparent', 
  shadowOpacity: 0, 
  shadowColor: 'transparent' 
}

screen.navigationOptions = ({ navigation:{ dispatch } }) => ( { 
  headerStyle,
  headerLeft: 
    <HeaderCloseButton
      testID={'step_screen_close_icon'} 
      onPress={() => dispatch(NavigationActions.back())}
      pressColorAndroid={'white'}
      tintColor={'white'}
    />
} );

export default {
  screen,
}