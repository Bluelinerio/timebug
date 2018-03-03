import React from 'react';
import { Button, Text, Platform } from 'react-native';
import { HeaderBackButton, NavigationActions } from 'react-navigation';
import screen from './containers/WorkbookDoneScreenContainer';
import { reset } from '../../redux/actions/nav.actions';

// import Icon from 'react-native-vector-icons/Entypo'
// import styles from '../../styles/components/Button'
// <Text style={styles.wideButtonText}>Done</Text>
// style={{
// 						paddingTop: 14,
// 						paddingHorizontal: 16,
// 						right: 16
// 					}}

screen.navigationOptions = ({
  navigation: { dispatch, state: { params: { stepColor, stepNumber } } }
}) => {
  return {
    headerRight: (
      <Button
        title={'Done'}
        color={Platform.OS === 'ios' ? 'white' : 'transparent'}
        accessibilityLabel={'close'}
        backgroundColor={'transparent'}
        onPress={() => dispatch(reset())}
      />
    ),
    headerStyle: {
      backgroundColor: stepColor,
      borderBottomColor: 'transparent',
      shadowOpacity: 0,
      shadowColor: 'transparent'
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
