import React                 from 'react';
import { NavigationActions } from 'react-navigation';
import screen                from './containers/StepScreenContainer';
import HeaderCloseButton     from '../../components/HeaderCloseButton';
import styles                from '../styles';

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
