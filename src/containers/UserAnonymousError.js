import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import LoginWithFBButtonContainer from './LoginWithFbButtonContainer'

export default ({title='ERROR', message='You need to be logged in to be user this screen.'}) => (
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
    justifyContent: 'center'
  }
});

