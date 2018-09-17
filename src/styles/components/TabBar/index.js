//@flow
import { StyleSheet } from 'react-native'
import {
  iOSUIKit
} from 'react-native-typography'

/**
 * Upper row Sized at 25% of the whole banner
 */

export default StyleSheet.create({
  tabBarLabel: {
    ...iOSUIKit.caption2Object,
    textAlign: 'center'
  }
})
