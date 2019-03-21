import { StyleSheet, Platform }       from 'react-native'
import {
  sanFranciscoWeights,
  robotoWeights,
  iOSUIKit,
}                                     from 'react-native-typography'
import {
  white2,
  StartScreenButtonsColor,
  StartScreenBackgroundColor,
  deepBlue,
  PHASE_1_COMPLETE,
  PHASE_2_COMPLETE,
  PHASE_3_COMPLETE,
  PHASE_1_INCOMPLETE,
  gray400,
  paleBlue,
}                                     from '../../../constants/colors'
import Viewport, { heightPercentage } from '../../../utils/viewportCalculation'
import { bannerHeight }               from '../../../styles/components/StartScreenBanner'

const containerColor = StartScreenBackgroundColor
const buttonColor = StartScreenButtonsColor
const fontColor = white2

const { viewportHeight } = Viewport
const remainderHeight = viewportHeight - bannerHeight
const versionHeight = heightPercentage(15, remainderHeight)

export const StepComponentActionDimensions = 36
export const StepComponentActionRadius = 36

export const helperIconSize = 22

export const colors = {
  containerColor,
  fontColor,
  buttonColor,
}

export const progressFillColor = fontColor

export const svgStyles = {
  iconPhase1: {
    fill: PHASE_1_COMPLETE,
    height: helperIconSize,
    width: helperIconSize,
  },
  iconPhase2: {
    fill: PHASE_2_COMPLETE,
    height: helperIconSize,
    width: helperIconSize,
  },
  iconPhase3: {
    fill: PHASE_3_COMPLETE,
    height: helperIconSize,
    width: helperIconSize,
  },
}

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
  },
  phaseProportion: {
    color: fontColor,
    fontSize: 8,
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
  },
})

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: containerColor,
  },
  disabled: {
    backgroundColor: gray400,
  },
  content: {
    padding: 20,
  },
  full: {},
  buttonContainer: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: buttonColor,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 6,
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    height: 'auto',
    flexDirection: 'row',
    backgroundColor: paleBlue,
  },
  buttonImage: {
    height: 60,
    width: 60,
    aspectRatio: 1 / 1,
  },
  stepText: {
    ...iOSUIKit.subheadEmphasizedObject,
    ...Platform.select({
      android: {
        ...robotoWeights.bold,
      },
      ios: {
        ...sanFranciscoWeights.bold,
      },
    }),
  },
  stepTitleText: {
    ...Platform.select({
      android: {
        ...robotoWeights.bold,
      },
      ios: {
        ...sanFranciscoWeights.bold,
      },
    }),
    fontSize: 14,
    color: fontColor,
    fontFamily: 'Metropolis',
    textAlign: 'justify',
  },
  buttonText: {
    color: fontColor,
    fontFamily: 'Metropolis',
    textAlign: 'justify',
    fontSize: 12,
  },
  subtitle: {
    ...iOSUIKit.caption2Object,
    ...Platform.select({
      android: {
        ...robotoWeights.regular,
      },
      ios: {
        ...sanFranciscoWeights.semibold,
      },
    }),
  },
  strong: {
    ...Platform.select({
      android: {
        ...robotoWeights.regular,
      },
      ios: {
        ...sanFranciscoWeights.semibold,
      },
    }),
  },
  versionContainer: {
    flex: 1,
    maxHeight: versionHeight,
    height: versionHeight,
    backgroundColor: white2,
  },
  buttonTextContainer: {
    flex: 2,
    paddingHorizontal: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderLeftWidth: 1,
    paddingVertical: 8,
    borderColor: fontColor,
  },
  buttonImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainComponent: { flex: 4 },
  mainComponentTopRow: { flex: 1, flexDirection: 'row' },
  mainComponentBottomRow: {
    paddingTop: 8,
  },
  secondaryComponent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  helperButton: {
    height: StepComponentActionDimensions,
    width: StepComponentActionDimensions,
    borderRadius: StepComponentActionRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  audio: {
    color: fontColor,
  },
  book: {
    color: fontColor,
  },
  iconPhase1: {
    color: PHASE_1_COMPLETE,
  },
  iconPhase2: {
    color: PHASE_2_COMPLETE,
  },
  iconPhase3: {
    color: PHASE_3_COMPLETE,
  },

  iconContainerPhase1Complete: {
    backgroundColor: PHASE_1_INCOMPLETE,
  },
  iconContainerPhase2Complete: {
    backgroundColor: fontColor,
  },
  iconContainerPhase3Complete: {
    backgroundColor: fontColor,
  },
  iconContainerPhase1Incomplete: {
    backgroundColor: fontColor,
  },
  iconContainerPhase2Incomplete: {
    backgroundColor: fontColor,
  },
  iconContainerPhase3Incomplete: {
    backgroundColor: fontColor,
  },

  phase1Incomplete: {
    color: deepBlue,
  },
  phase2Incomplete: {
    color: fontColor,
  },
  phase3Incomplete: {
    color: fontColor,
  },
})
