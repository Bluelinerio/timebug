import React                            from 'react'
import { View, Text, StatusBar, Image } from 'react-native'
import { HeaderBackButton }             from 'react-navigation'
import { SafeAreaView }                 from 'react-navigation'
import LoginButtonContainer             from '2020_containers/LoginButtonContainer'
import Gradient                         from '2020_components/Gradient'
import { icon }                         from '2020_resources/images'
import styles, {
  closeButtonColor,
  statusBarColor,
  gradientColors,
}                                       from '../styles'

const innerText = `Login to enjoy the app at it's fullest and live the journey through the seven pillars of life!`

type Props = {
  navigation: () => null,
}

class LoginScreen extends React.PureComponent<Props> {
  _onLogin = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  _onClose = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  render() {
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={[styles.container]}
      >
        <StatusBar barStyle="dark-content" backgroundColor={statusBarColor} />
        <View style={styles.container}>
          <Gradient colors={gradientColors} style={styles.modal}>
            <View style={styles.modalHeader}>
              <View style={[styles.headerBlock, styles.backButtonBlock]}>
                <HeaderBackButton
                  tintColor={closeButtonColor}
                  onPress={this._onClose}
                />
              </View>
            </View>
            <View style={styles.headerBlock}>
              <Image style={[styles.headerIcon]} source={icon} />
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.text}>{innerText}</Text>
            </View>
            <LoginButtonContainer onPress={this._onLogin} />
          </Gradient>
        </View>
      </SafeAreaView>
    )
  }
}

export default LoginScreen
