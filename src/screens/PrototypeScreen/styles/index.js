import { StyleSheet } from 'react-native'
import {
  paleBlue,
  azure,
  gray50,
  darkBlue,
  gray900
} from '../../../constants/colors'
import { iOSUIKit } from 'react-native-typography'
import hexToRgba from '../../../utils/colorTransform'

export const headerBackgroundColor = paleBlue
export const formTextColor = darkBlue

export const formStyles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'transparent',
    flex: 5,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formButtonContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    padding: 8,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  //TODO: shadow
  formButton: {
    backgroundColor: azure,
    padding: 8,
    borderRadius: 6
  },
  formButtonText: {
    color: gray50
  },
  labelComponent: {
    fontFamily: 'Metropolis'
  },
  textInputLabelStyle: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    color: formTextColor,
    fontSize: 18
  },
  textInputStyle: {
    textAlign: 'center',
    color: gray900,
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 16
  },
  textInputContainerStyle: {
    marginTop: 16,
    borderWidth: 0.5,
    borderColor: '#cccccc',
    backgroundColor: hexToRgba(azure, 0.1),
    borderRadius: 4
  },
  buttonComponentContainer: {
    flexDirection: 'row',
    paddingTop: 16,
    marginTop: 8,
    justifyContent: 'space-between'
  },
  centeredButton: {
    justifyContent: 'center'
  },
  buttonComponentStyle: {
    backgroundColor: azure,
    minWidth: 80,
    borderRadius: 4
  }
})

export default StyleSheet.create({
  container: {
    flex: 1
  },
  prototypeBackground: {
    backgroundColor: paleBlue
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
