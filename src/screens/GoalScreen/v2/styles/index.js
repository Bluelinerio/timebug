import { StyleSheet } from 'react-native'
import {
  PHASE_1_COMPLETE,
  PHASE_2_COMPLETE,
  PHASE_3_COMPLETE,
  orange50,
  green50,
  white2,
  paleBlue,
  gray900,
} from '2020_constants/colors'
import { iOSUIKit } from 'react-native-typography'

export const phaseStyles = {
  p1: {
    color: PHASE_1_COMPLETE,
    background: paleBlue,
    textColor: white2,
  },
  p2: {
    color: PHASE_2_COMPLETE,
    background: orange50,
    textColor: white2,
  },
  p3: {
    color: PHASE_3_COMPLETE,
    background: green50,
    textColor: white2,
  },
}

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  stickyHeader: {},
  phaseList: {
    width: '100%',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  phaseComponent: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 6,
    padding: 8,
    minHeight: 60,
    justifyContent: 'center',
  },
  phaseText: {
    ...iOSUIKit.caption2EmphasizedObject,
    color: white2,
    fontSize: 11,
  },
  lockedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockedText: {
    ...iOSUIKit.title3EmphasizedObject,
    color: gray900,
    textAlign: 'center',
  },
})
