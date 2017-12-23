import React from 'react';
import { TouchableHighlight } from 'react-native'
import screen from './containers/StepScreenContainer';
import Icon from 'react-native-vector-icons/Ionicons'
import { goBack } from '../../HOC/navigation';
import HeaderCloseButton from '../../components/HeaderCloseButton'

if (!HeaderCloseButton) { throw 'did not find headerCloseButton' }
//navigation.goBack('HomeScreen')
// look at the 'styles' in react-navigation/src/views/Header/Header.js
const headerStyle = { position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0, borderBottomColor: 'transparent', shadowOpacity: 0, shadowColor: 'transparent' }

screen.navigationOptions = ({ navigation }) => ( { 
  headerStyle,
  headerLeft: 
    <HeaderCloseButton
      testID={'step_screen_close_icon'} 
      onPress={goBack}
      pressColorAndroid={'white'}
      tintColor={'white'}
      width={20}
    />

} );

export default {
  screen,
}