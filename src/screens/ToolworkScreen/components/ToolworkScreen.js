import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { View, BackHandler, StatusBar, ScrollView } from 'react-native'
import styles, { headerColor } from '../styles'
import WorkArea from '../containers/WorkAreaContainer'

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
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={[styles.container, styles.screenBackground]}
      >
        <StatusBar barStyle="light-content" backgroundColor={headerColor} />
        <ScrollView
          style={[styles.scrollView, styles.fullWidth]}
          contentContainerStyle={styles.scrollView}
        >
          <View style={styles.padded}>
            <WorkArea />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default ToolworkScreen
