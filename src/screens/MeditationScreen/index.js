// @flow
import * as React from 'react'
import MeditationScreenComponent from './components/MeditationScreenComponent'
import { StackNavigator, NavigationActions } from 'react-navigation'
import styles from '../styles'
import HeaderCloseButton from '../../components/HeaderCloseButton'

MeditationScreenComponent.navigationOptions = ({
  navigation: { dispatch }
}) => ({
  headerStyle: styles.navigationOptionHeaderStyle,
  headerRight: (
    <HeaderCloseButton
      onPress={() => dispatch(NavigationActions.back())}
      pressColorAndroid={'white'}
      tintColor={'white'}
    />
  )
})

const MeditationScreen = StackNavigator(
  {
    Markdown: {
      screen: MeditationScreenComponent
    }
  },
  {
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1
    }
  }
)

// TODO: determin if it is required to fixDebounce:
//fixDebounce(MeditationScreen)

export default MeditationScreen
