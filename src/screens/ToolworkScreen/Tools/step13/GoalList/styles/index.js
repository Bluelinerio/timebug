import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { gray900, gray50 } from '2020_constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  newGoalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 64,
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
  newGoalText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
  },
  goalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    marginVertical: 10,
    padding: 8,
    backgroundColor: gray50,
    borderRadius: 6,
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
  goalText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
  },
})
