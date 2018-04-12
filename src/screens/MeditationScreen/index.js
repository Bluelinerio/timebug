// @flow
import * as React                            from 'react'
import { connect }                           from 'react-redux'
import MeditationScreenComponent             from './components/MeditationScreenComponent'
import { StackNavigator, NavigationActions } from 'react-navigation'
import styles                                from '../styles'
import HeaderCloseButton                     from '../../components/HeaderCloseButton'

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

const done = () => NavigationActions.back()

const MeditationScreenContainer = connect(
  state => ({
    soundFile: require('../../resources/sounds/gong.wav')
  }),
  ({ done })
)(MeditationScreenComponent)

const MeditationScreen = StackNavigator(
  {
    Markdown: {
      screen: MeditationScreenContainer
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

type Meditation = {
  id: string,
  name: string,
  step: string,
  backgroundColor: string,
  timeInSeconds: number,
  audioFile: string // if
}

// TODO: determin if it is required to fixDebounce:
//fixDebounce(MeditationScreen)

export default MeditationScreen
