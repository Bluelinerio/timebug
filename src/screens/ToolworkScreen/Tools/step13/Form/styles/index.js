import { iOSUIKit } from 'react-native-typography'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  fullHeight: {
    height: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  buttonStyles: {
    width: '50%',

  },
  buttonTextStyles: {
    ...iOSUIKit.title3EmphasizedObject,
  },
})
