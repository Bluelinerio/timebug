import { StyleSheet } from 'react-native'
import { gray400, PHASE_3_COMPLETE } from '2020_constants/colors'
import { iOSUIKit } from 'react-native-typography'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  tabBar: {
    minHeight: 54,
    maxHeight: 54,
    flexDirection: 'row',
    width: '100%',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  tabText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray400,
  },
  selectedTabText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: PHASE_3_COMPLETE,
  },
})
