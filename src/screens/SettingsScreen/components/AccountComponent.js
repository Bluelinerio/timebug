// @flow
import React                                 from 'react'
import { View, Text }                        from 'react-native'
import LogoutContainer                       from '2020_containers/LogoutButtonContainer'
import OpenLoginContainer                    from '2020_containers/OpenLoginContainer'
import UserImageContainer                    from '2020_containers/UserImageContainer'
import Icon                                  from 'react-native-vector-icons/FontAwesome'
import styles, { facebook as facebookColor } from '../styles'

type Props = {
  email: string,
  name: string,
  anonymous?: boolean,
}

class AccountComponent extends React.PureComponent<Props> {
  render() {
    const { name, anonymous } = this.props
    return (
      <View style={styles.settingContainer}>
        <Text style={styles.settingTitle}>Connected account</Text>
        <View style={styles.genericRow}>
          <View style={styles.facebookIconContainer}>
            <Icon.Button name="facebook" backgroundColor={facebookColor} />
          </View>
          <View style={styles.userFacebookData}>
            <Text style={styles.text}>{name}</Text>
            {anonymous ? (
              <OpenLoginContainer>
                <Text style={styles.link}> Sign in with Facebook</Text>
              </OpenLoginContainer>
            ) : (
              <LogoutContainer>
                <Text style={styles.link}>Sign out</Text>
              </LogoutContainer>
            )}
          </View>
          <View style={styles.facebookImageContainer}>
            <UserImageContainer />
          </View>
        </View>
      </View>
    )
  }
}

export default AccountComponent
