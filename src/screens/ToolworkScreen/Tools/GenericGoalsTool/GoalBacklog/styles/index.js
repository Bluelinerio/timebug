import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { gray50, gray900, gray400, gray200 } from '2020_constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  goalButton: {
    width: '100%',
    flexDirection: 'row',
    height: 64,
    padding: 16,
    borderRadius: 8,
    maxHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: gray50,
    marginVertical: 10,
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
  goal: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
  },
  goalBacklogListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tabBarContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: gray200,
    borderBottomWidth: 1,
  },
  tab: {
    flex: 1,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: gray50,
  },
  tabText: {
    ...iOSUIKit.bodyEmphasizedObject,
    fontSize: 15,
    color: gray400,
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
