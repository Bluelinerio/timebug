// @flow
import * as React                       from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Text                             from '2020_components/Text'
import { iOSColors }                    from 'react-native-typography'

const styles = StyleSheet.create({
  reset: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: iOSColors.blue,
    borderRadius: 6,
    padding: 8,
  },
  resetText: {
    color: '#FAFAFA',
  },
})

const SimpleButton = ({
  hide,
  onPress,
}: {
  show: boolean,
  text: string,
  onPress: () => void,
}) => {
  return (
    !hide && (
      <TouchableOpacity style={styles.reset} onPress={onPress}>
        <Text style={styles.resetText}>{'DEV: Press to reset steps'}</Text>
      </TouchableOpacity>
    )
  )
}

export default SimpleButton
