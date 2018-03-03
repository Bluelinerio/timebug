import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, NavigationActions } from 'react-navigation';

export default ({ dispatch, pressColorAndroid = 'rgba(0, 0, 0, .32)' }) => (
  <Icon.Button
    accessibilityComponentType="button"
    accessibilityLabel={'close'}
    accessibilityTraits="button"
    testID={'meditation_screen_close_icon'}
    delayPressIn={0}
    pressColor={pressColorAndroid}
    name={'md-close'}
    size={24}
    color={'white'}
    backgroundColor={'transparent'}
    onPress={() => dispatch(NavigationActions.back())}
    style={{
      alignSelf: 'flex-end',
      marginHorizontal: 4,
      width: 44
    }}
  />
);
