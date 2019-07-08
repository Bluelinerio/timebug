// @flow
import React                      from 'react'
import { BackHandler, StatusBar } from 'react-native'
import { SafeAreaView }           from 'react-navigation'
import styles                     from '../styles'
import WorkArea                   from '../containers/WorkAreaContainer'
import { mapPhaseToColor }        from '../utils/phaseColors'

type Props = {
  navigation: any,
}

class ToolworkScreen extends React.PureComponent<Props> {
  _didFocusSubscription
  _willBlurSubscription

  constructor(props) {
    super(props)
    this._didFocusSubscription = props.navigation.addListener('didFocus', () =>
      BackHandler.addEventListener(
        'hardwareBackPress',
        this.onBackButtonPressAndroid
      )
    )
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      () =>
        BackHandler.removeEventListener(
          'hardwareBackPress',
          this.onBackButtonPressAndroid
        )
    )
  }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove()
    this._willBlurSubscription && this._willBlurSubscription.remove()
  }

  onBackButtonPressAndroid = () => {
    const { navigation } = this.props
    navigation.goBack()
    return true
  }

  _onSoftwareBackButtonPress = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  render() {
    const { navigation } = this.props
    const { state } = navigation
    const phase = state.params.tool.phase

    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={[
          styles.container,
          styles.screenBackground,
          { backgroundColor: mapPhaseToColor(phase).back },
        ]}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor={mapPhaseToColor(phase).header}
        />
        <WorkArea />
      </SafeAreaView>
    )
  }
}

export default ToolworkScreen
