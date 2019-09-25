import { StyleSheet, Platform } from 'react-native'
import {
  iOSUIKit,
  sanFranciscoWeights,
  robotoWeights,
} from 'react-native-typography'
import {
  azure,
  paleBlue,
  white2,
  gray300,
  gray500,
} from '../../../constants/colors'

const fontColor = white2
export const iconColor = white2
export const lockedColor = gray300
export const lockedTextColor = gray500

export const stylesStep1 = {
  formContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderRadius: 6,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchContainer: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  caption: {
    ...iOSUIKit.subheadEmphasizedObject,
    fontSize: 18,
    fontFamily: 'Metropolis',
    textAlign: 'center',
  },
  yesNoHint: {
    ...iOSUIKit.subheadEmphasizedObject,
    fontFamily: 'Metropolis',
    textAlign: 'center',
  },
  congratulations: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: azure,
    fontFamily: 'Metropolis',
    textAlign: 'center',
  },
  streakText: {
    ...iOSUIKit.footnoteObject,
    color: azure,
    fontFamily: 'Metropolis',
    textAlign: 'center',
  },
}

export default StyleSheet.create({
  stickyHeader: {
    flex: 1,
    height: 'auto',
    flexDirection: 'row',
    backgroundColor: paleBlue,
  },
  header: {
    height: 64,
    backgroundColor: '#005587',
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  background: {
    backgroundColor: paleBlue,
  },
  padded: {
    paddingTop: 16,
  },
  tableContainer: {
    flexDirection: 'column',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  timeContainer: {
    flexDirection: 'column',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  elementRow: {
    paddingVertical: 6,
  },
  headerRowText: {
    ...iOSUIKit.footnoteEmphasizedObject,
    fontFamily: 'Metropolis',
  },
  element: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  elementText: {
    ...iOSUIKit.caption2EmphasizedObject,
    textAlign: 'center',
    fontFamily: 'Metropolis',
  },
  pillar: {
    flex: 2,
  },
  pillarText: {
    ...iOSUIKit.caption2EmphasizedObject,
    textAlign: 'left',
    fontFamily: 'Metropolis',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBox: {
    alignSelf: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  notice: {
    ...iOSUIKit.caption2EmphasizedObject,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  screenLockedContainer: {
    flexDirection: 'column',
    marginTop: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const phaseProgressStyles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    padding: 20,
  },
  phaseContainer: {
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 6,
    padding: 8,
  },
  phaseNumber: {
    ...iOSUIKit.caption2EmphasizedObject,
    color: fontColor,
    fontSize: 11,
    fontFamily: 'Metropolis',
  },
  phaseText: {
    ...iOSUIKit.caption2EmphasizedObject,
    color: fontColor,
    fontSize: 11,
    fontFamily: 'Metropolis',
  },
  mainArea: {
    flex: 1,
  },
  secondaryArea: {
    marginTop: 4,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  phaseProportion: {
    color: fontColor,
    fontSize: 11,
    fontFamily: 'Metropolis',
  },
  strong: {
    ...Platform.select({
      android: {
        ...robotoWeights.bold,
      },
      ios: {
        ...sanFranciscoWeights.bold,
      },
    }),
    fontFamily: 'Metropolis',
  },
})
