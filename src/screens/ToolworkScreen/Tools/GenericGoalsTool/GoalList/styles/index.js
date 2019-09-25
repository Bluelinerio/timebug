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
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  goalContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    marginVertical: 10,
    padding: 8,
    backgroundColor: gray50,
    borderRadius: 8,
    maxHeight: 60,
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
  goalText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  leftBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBlock: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
})
