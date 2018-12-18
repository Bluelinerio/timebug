import { StyleSheet }      from 'react-native'
import {
  PHASE_2_COMPLETE,
  PHASE_3_COMPLETE,
  deepBlue,
  PHASE_1_BAR,
  white2,
  gray400,
  hotPink,
}                          from '../../../../constants/colors'
import { iOSUIKit }        from 'react-native-typography'
import { heightPercentage, widthPercentage } from '../../../../utils/viewportCalculation'

export const sideBarWidth = widthPercentage(20)
export const helperIconContainerSize = widthPercentage(70, sideBarWidth)
export const helperIconSize = widthPercentage(70, helperIconContainerSize)
export const stepIconSize = heightPercentage(100, heightPercentage(13.5))

const fontColor = white2

export const svgStyles = {
  phase1: {
    fill: deepBlue,
    height: helperIconSize,
    width: helperIconSize,
  },
  phase2: {
    fill: white2,
    height: helperIconSize,
    width: helperIconSize,
  },
  phase3: {
    fill: white2,
    height: helperIconSize,
    width: helperIconSize,
  },
  disabled: {
    fill: gray400,
    height: helperIconSize,
    width: helperIconSize,
  },
  selected: {
    fill: hotPink,
    height: helperIconSize,
    width: helperIconSize,
  },
}

export const barColors = {
  phase1: {
    backgroundColor: PHASE_1_BAR,
  },
  phase2: {
    backgroundColor: PHASE_2_COMPLETE,
  },
  phase3: {
    backgroundColor: PHASE_3_COMPLETE,
  },
}

export const sideBarStyles = {
  sideBarContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'blue',
    maxWidth: '20%',
    paddingBottom: '10%',
    paddingTop: '5%',
  },
}

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  stepBarContainer: {
    flex: 1,
    height: '13.5%',
    maxHeight: '15%',
    flexDirection: 'row',
    backgroundColor: PHASE_1_BAR,
    paddingHorizontal: 2,
    paddingVertical: 6,
  },
  stepAudioButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepBarContentContainer: {
    flex: 2,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  stepPictureContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepBarContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 4,
    flexWrap: 'wrap',
  },
  stepNumber: {
    ...iOSUIKit.subheadEmphasizedObject,
    fontSize: 16,
    color: fontColor,
  },
  stepTitle: {
    ...iOSUIKit.footnoteObject,
    fontSize: 14,
    color: fontColor,
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
    maxHeight: helperIconContainerSize,
    flex: 1,
  },
  buttonImage: {
    height: stepIconSize,
    width: stepIconSize,
    aspectRatio: 1 / 1,
  },
  snippetStyle: {
    textAlign: 'justify',
  },
})
