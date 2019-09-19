import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { gray50, gray900 } from '2020_constants/colors'

const helperIconSize = 40

export const baseIconStyle = {
  height: helperIconSize,
  width: helperIconSize,
}

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '50%',
    minHeight: 64,
    backgroundColor: gray50,
    borderRadius: 6,
    marginTop: 12,
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
    }),
  },
  buttonText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
  },
  textAreaContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  textArea: {
    backgroundColor: gray50,
    padding: 8,
  },
  additionalInput: {
    color: gray900,
    fontSize: 16,
  },
})
