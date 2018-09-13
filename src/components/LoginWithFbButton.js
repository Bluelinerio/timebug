// @flow
import * as React                              from 'react'
import { View, Text, Dimensions, StyleSheet }  from 'react-native'
import Icon                                    from 'react-native-vector-icons/FontAwesome'
import Entypo                                  from 'react-native-vector-icons/Entypo'
import { heavyGray, lightGray, facebookColor } from '../constants/colors'

export type Props = {
  onPress: () => void,
  advisoryText: string
}

const LoginWithFbButton = ({
  onPress,
  advisoryText = `We don't post anything to Facebook`
}: Props) => (
  <View style={styles.container}>
    <Icon.Button
      name="facebook"
      backgroundColor={facebookColor}
      onPress={onPress}
      style={styles.facebookButton}
    >
      Login with Facebook
    </Icon.Button>
    <View style={styles.advisoryContainer}>
      <Entypo
        color={heavyGray}
        name="info-with-circle"
        style={styles.infoIcon}
      />
      <Text style={styles.advisoryText}>{advisoryText}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: Dimensions.get('window').height * 0.05
  },
  facebookButton: {
    paddingHorizontal: 10
  },
  advisoryContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  infoIcon: {
    alignSelf: 'center',
    marginHorizontal: 4
  },
  advisoryText: {
    textAlign: 'center',
    color: lightGray,
    fontSize: 11
  }
})

export default LoginWithFbButton
