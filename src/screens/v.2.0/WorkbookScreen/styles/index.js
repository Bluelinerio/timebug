import { StyleSheet } from 'react-native'
import {
  PHASE_2_COMPLETE,
  PHASE_3_COMPLETE,
  deepBlue,
  PHASE_1_BAR,
  SELF_ASSESSMENT,
  VISION_CREATION,
  white2
} from '../../../../constants/colors'
import {
  iOSUIKit
}                                     from 'react-native-typography'
import { heightPercentage } from '../../../../utils/viewportCalculation'

export const stepBarHeight = heightPercentage(14)
export const helperIconContainerSize = heightPercentage(80, stepBarHeight)
export const helperIconSize = heightPercentage(80, helperIconContainerSize)
export const stepIconSize = helperIconContainerSize
export const stepBarPadding = heightPercentage(5, stepBarHeight)

const fontColor = white2

export const svgStyles = {
  phase1: {
    fill: deepBlue,
    height: helperIconSize,
    width: helperIconSize
  },
  phase2: {
    fill: white2,
    height: helperIconSize,
    width: helperIconSize
  },
  phase3: {
    fill: white2,
    height: helperIconSize,
    width: helperIconSize
  }
}

export const barColors = {
  phase1: {
    backgroundColor: PHASE_1_BAR,
    borderBottomWidth: 0.5,
    borderBottomColor: deepBlue,
  },
  phase2: {
    backgroundColor: PHASE_2_COMPLETE,
    borderBottomWidth: 0.5,
    borderBottomColor: SELF_ASSESSMENT,
  },
  phase3: {
    backgroundColor: PHASE_3_COMPLETE,
    borderBottomWidth: 0.5,
    borderBottomColor: VISION_CREATION,
  }
}

export default StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  stepBarContainer: {
    flex: 1,
    height: stepBarHeight,
    maxHeight: stepBarHeight,
    flexDirection: 'row',
    backgroundColor: PHASE_1_BAR,
    borderBottomWidth: 0.5,
    borderBottomColor: deepBlue,
    paddingHorizontal: 2,
    paddingVertical: stepBarPadding
  },
  stepAudioButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepBarContentContainer: {
    flex: 2,
    flexDirection: 'column'
  },
  stepPictureContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepBarContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  stepNumber: {
    ...iOSUIKit.subheadEmphasizedObject,
    fontSize: 16,
    color: fontColor
  },
  stepTitle: {
    ...iOSUIKit.footnoteObject,
    fontSize: 14,
    color: fontColor
  },
  stepBarTitleContainer: {
    flex: 2,
  },
  helperButton: {
    height: helperIconContainerSize,
    width: helperIconContainerSize,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  buttonImage: {
    height: stepIconSize,
    width: stepIconSize,
    aspectRatio: 1 / 1
  },
})
