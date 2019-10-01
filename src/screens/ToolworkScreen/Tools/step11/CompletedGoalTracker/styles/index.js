import { StyleSheet } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { PHASE_2_COMPLETE, gray900, white2 } from '2020_constants/colors'

const color = '#ffcc80'
const helperIconSize = 40

export const backIconColor = PHASE_2_COMPLETE
export const minimumTrackColor = PHASE_2_COMPLETE
export const maximumTrackColor = color

export const iconStyle = {
  fill: gray900,
  height: helperIconSize,
  width: helperIconSize,
}

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  titleContainer: {
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  goalScreenTitle: {
    ...iOSUIKit.largeTitleEmphasizedObject,
    fontSize: 28,
    marginBottom: 3,
    color: PHASE_2_COMPLETE,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  goalScreenSubtitle: {
    ...iOSUIKit.subheadObject,
    color: PHASE_2_COMPLETE,
    textAlign: 'center',
    fontFamily: 'Metropolis',
  },
  goalListContainer: {
    paddingHorizontal: 12,
  },
  goalElementContainer: {
    flexDirection: 'row',
    backgroundColor: color,
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 8,
  },
  goalLabel: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  goalTitleContainer: {
    paddingHorizontal: 4,
  },
  subHeader: {
    maxHeight: '10%',
    padding: 12,
    justifyContent: 'center',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: PHASE_2_COMPLETE,
    marginLeft: 8,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  goalDetailsContainer: {
    padding: 12,
  },
  goalDetailsTitleContainer: {},
  goalDetailsTitle: {
    ...iOSUIKit.largeTitleEmphasizedObject,
    fontSize: 24,
    marginBottom: 3,
    color: PHASE_2_COMPLETE,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  subDataContainer: {
    marginVertical: 8,
    alignSelf: 'center',
    padding: 8,
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
    minHeight: '15%',
    backgroundColor: color,
  },
  subData: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  completionTitleContainer: {},
  completionLabel: {
    ...iOSUIKit.largeTitleEmphasizedObject,
    fontSize: 20,
    marginBottom: 3,
    color: PHASE_2_COMPLETE,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  reopenButtonContainer: {
    marginVertical: 8,
    alignItems: 'center',
  },
  reopenButton: {
    backgroundColor: PHASE_2_COMPLETE,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  reopenLabel: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: white2,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
})
