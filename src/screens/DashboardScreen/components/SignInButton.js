import React              from 'react'
import { View, Text }     from 'react-native'
import OpenLoginContainer from '2020_containers/OpenLoginContainer'
import styles             from '../styles'

class SignInButton extends React.PureComponent {
  render() {
    return (
      <OpenLoginContainer>
        <View style={styles.signInButton}>
          <Text style={styles.signInText}>Press here to sign in!</Text>
        </View>
      </OpenLoginContainer>
    )
  }
}

export default SignInButton
