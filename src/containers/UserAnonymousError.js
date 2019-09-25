// @flow

/**
 * Deprecated
 */
import * as React                 from 'react'
import { View, StyleSheet }       from 'react-native'
import Text                       from '2020_components/Text'
import LoginWithFBButtonContainer from './LoginWithFbButtonContainer'

const UserAnonymousError = ({
  title = 'Whoops.....',
  message = 'You need to be logged in to view this screen.',
}: {
  title: string,
  message: string,
}) => (
  <View style={styles.container} testID="error_view">
    <Text style={{ padding: 20, textAlign: 'center', fontWeight: 'bold' }}>
      {title}
    </Text>
    <Text style={{ padding: 20, textAlign: 'center', fontWeight: '100' }}>
      {message}
    </Text>
    <LoginWithFBButtonContainer />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default UserAnonymousError
