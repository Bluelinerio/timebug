import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { gray50, gray900 } from '2020_constants/colors'

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
      android: { elevation: 8 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.6,
        shadowRadius: 6,
      },
    }),
  },
  buttonText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
    fontFamily: 'Metropolis',
    fontWeight: '700',
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
