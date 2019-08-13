import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { gray50, gray900 } from '2020_constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  goalButton: {
    width: '100%',
    height: 64,
    padding: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: gray50,
    marginVertical: 10,
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
  goal: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
  },
})
