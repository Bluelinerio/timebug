import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import screen from './containers/StepScreenContainer';
import HeaderCloseButton from '../../components/HeaderCloseButton';
import Logo from '../../components/Logo';
import styles from '../styles';

//  headerTitle: <Logo height={30} width={30}/>,

screen.navigationOptions = ({ navigation: { dispatch } }) => ({
  headerStyle: styles.navigationOptionHeaderStyle,
  headerRight: (
    <HeaderCloseButton
      testID={'step_screen_close_icon'}
      onPress={() => dispatch(NavigationActions.back())}
      pressColorAndroid={'white'}
      tintColor={'white'}
    />
  )
});

export default {
  screen
};
