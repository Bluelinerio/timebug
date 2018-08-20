import { StyleSheet, Platform }       from 'react-native'
import {
  sanFranciscoWeights,
  robotoWeights,
  iOSUIKit
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
  PHASE_2_INCOMPLETE,
  PHASE_3_INCOMPLETE
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

export const helperIconSize = 18

export const colors = {
  containerColor,
  fontColor,
  buttonColor
}

export const progressFillColor = fontColor

export const phaseProgressStyles = StyleSheet.create({
  listContainer: {
    flex:1,
    flexDirection: 'row',
    padding: 12
  },
  phaseContainer: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 6,
    padding: 8
  },
  phaseNumber: {
    color: fontColor,
    fontSize: 12,
    fontFamily: 'Metropolis'
  },
  phaseText: {
    color: fontColor,
    fontSize: 12,
    fontFamily: 'Metropolis'
  },
  mainArea: {
    flex:1
  },
  secondaryArea: {
    flex:1,
  },
  phaseProportion: {
    color: fontColor,
    fontSize: 10,
    fontFamily: 'Metropolis'
  }
})

export default StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: containerColor
  },
  content: {
    padding: 20
  },
  full: {},
  buttonContainer: {
    flex: 1,
    padding: 20,
    paddingBottom: 0
  },
  button: {
    flexDirection: 'row',
    backgroundColor: buttonColor,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 6,
    justifyContent: 'space-between'
  },
  buttonImage: {
    height: 60,
    width: 60,
    aspectRatio: 1 / 1
  },
  stepText: {
    ...iOSUIKit.subheadEmphasizedObject,
    ...Platform.select({
      android: {
        ...robotoWeights.bold
      },
      ios: {
        ...sanFranciscoWeights.semibold
      }
    })
  },
  stepTitleText: {
    ...iOSUIKit.footnoteEmphasizedObject
  },
  buttonText: {
    color: fontColor,
    fontFamily: 'Metropolis',
    textAlign: 'justify'
  },
  subtitle: {
    ...iOSUIKit.caption2Object,
    ...Platform.select({
      android: {
        ...robotoWeights.thin
      },
      ios: {
        ...sanFranciscoWeights.thin
      }
    })
  },
  strong: {
    ...Platform.select({
      android: {
        ...robotoWeights.regular
      },
      ios: {
        ...sanFranciscoWeights.semibold
      }
    })
  },
  versionContainer: {
    flex: 1,
    maxHeight: versionHeight,
    height: versionHeight,
    backgroundColor: white2
  },
  buttonTextContainer: {
    flex: 2,
    paddingHorizontal: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderLeftWidth: 1,
    paddingVertical: 8,
    borderColor: fontColor
  },
  buttonImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainComponent: { flex: 4 },
  mainComponentTopRow: { flex: 1, flexDirection: 'row' },
  mainComponentBottomRow: {
    paddingTop: 8
  },
  secondaryComponent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  helperButton: {
    height: StepComponentActionDimensions,
    width: StepComponentActionDimensions,
    borderRadius: StepComponentActionRadius,
    alignItems: 'center',
    justifyContent: 'center'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  audio: {
    color: fontColor
  },
  book: {
    color: fontColor
  },
  iconPhase1: {
    color: PHASE_1_COMPLETE
  },
  iconPhase2: {
    color: PHASE_2_COMPLETE
  },
  iconPhase3: {
    color: PHASE_3_COMPLETE
  },

  iconContainerPhase1Complete: {
    backgroundColor: PHASE_1_INCOMPLETE
  },
  iconContainerPhase2Complete: {
    backgroundColor: fontColor
  },
  iconContainerPhase3Complete: {
    backgroundColor: fontColor
  },
  iconContainerPhase1Incomplete: {
    backgroundColor: fontColor
  },
  iconContainerPhase2Incomplete: {
    backgroundColor: fontColor
  },
  iconContainerPhase3Incomplete: {
    backgroundColor: fontColor
  },

  phase1Incomplete: {
    color: deepBlue
  },
  phase2Incomplete: {
    color: fontColor
  },
  phase3Incomplete: {
    color: fontColor
  }
})
