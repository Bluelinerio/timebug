import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { gray50, gray900, gray400 } from '2020_constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  goalButton: {
    width: '100%',
    flexDirection: 'row',
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
  goalBacklogListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tabBarContainer: {
    width: '100%',
    minHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    minHeight: 64,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: gray50,
  },
  leftTab: {
    borderRightWidth: 1,
    borderColor: gray400,
  },
  tabText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
  },
  selectedTab: {
    backgroundColor: gray400,
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
