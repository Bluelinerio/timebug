// @flow
/**
 * Unused component
 */
import React                from 'react'
import { View, StyleSheet } from 'react-native'
import Text                 from '2020_components/Text'

type Props = {
  message: string,
  title: string,
}

const ErrorComponent = ({ message = 'unknown', title = 'Error' }: Props) => (
  <View style={styles.container} testID="error_view">
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.message}>{message}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { padding: 20, textAlign: 'center', fontWeight: 'bold' },
  message: { padding: 20, textAlign: 'center', fontWeight: '100' },
})

export default ErrorComponent
