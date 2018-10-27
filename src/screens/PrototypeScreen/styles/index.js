import { StyleSheet } from 'react-native'
import { paleBlue, azure, gray50 } from '../../../constants/colors'
import { iOSUIKit } from 'react-native-typography'

export const headerBackgroundColor = paleBlue

export default StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontFamily: 'Metropolis'
  },
  protoText: {
    ...iOSUIKit.bodyEmphasizedObject
  },
  buttonText: {
    ...iOSUIKit.bodyEmphasizedObject,
    textAlign: 'center',
    color: gray50
  },
  viewContainer: {
    flex: 1,
    padding: 16,
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    maxHeight: 60,
    height: 60,
    width: 160,
    padding: 10,
    borderRadius: 6,
    backgroundColor: azure,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
