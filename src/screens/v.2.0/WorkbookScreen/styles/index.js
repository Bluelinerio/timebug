import { StyleSheet, Platform } from 'react-native'
import {
  PHASE_1_COMPLETE,
  PHASE_2_COMPLETE,
  PHASE_3_COMPLETE,
  PHASE_1_TEXT_AND_BUTTONS,
  PHASE_2_TEXT_AND_BUTTONS,
  PHASE_3_TEXT_AND_BUTTONS,
  deepBlue,
  PHASE_1_BAR,
  white2,
  gray400,
  hotPink,
  blue900,
  gray600,
}                               from '../../../../constants/colors'
import { iOSUIKit }             from 'react-native-typography'
import {
  heightPercentage,
  widthPercentage,
}                               from '../../../../utils/viewportCalculation'
import hexToRgba                from '../../../../utils/colorTransform'

export const sideBarWidth = widthPercentage(20)
export const helperIconContainerSize = widthPercentage(70, sideBarWidth)
export const helperIconSize = widthPercentage(70, helperIconContainerSize)
export const stepIconSize = heightPercentage(100, heightPercentage(13.5))

const fontColor = white2

export const buttonWidth = widthPercentage(20)
export const buttonHeight = heightPercentage(6.66)

export const backButtonColor = gray600

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

export const buttonStyles = {
  phase1: {
    backgroundColor: PHASE_1_TEXT_AND_BUTTONS,
  },
  phase2: {
    backgroundColor: PHASE_2_TEXT_AND_BUTTONS,
  },
  phase3: {
    backgroundColor: PHASE_3_TEXT_AND_BUTTONS,
  },
}

export const textColors = {
  phase1: {
    color: deepBlue,
  },
  phase2: {
    color: PHASE_2_TEXT_AND_BUTTONS,
  },
  phase3: {
    color: PHASE_3_TEXT_AND_BUTTONS,
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

export const phaseColors = {
  phase1: PHASE_1_COMPLETE,
  phase2: PHASE_2_COMPLETE,
  phase3: PHASE_3_COMPLETE,
}

export const phaseTextAndButtonColors = {
  phase1: PHASE_1_TEXT_AND_BUTTONS,
  phase2: PHASE_2_TEXT_AND_BUTTONS,
  phase3: PHASE_3_TEXT_AND_BUTTONS,
}

export const formElementBackgroundStyles = {
  phase1: {
    backgroundColor: hexToRgba(PHASE_1_COMPLETE, 0.1),
  },
  phase2: {
    backgroundColor: hexToRgba(PHASE_2_COMPLETE, 0.1),
  },
  phase3: {
    backgroundColor: hexToRgba(PHASE_3_COMPLETE, 0.1),
  },
}

export const sideBarStyles = {
  sideBarContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
  backgroundImage: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: PHASE_1_BAR,
  },
  link: {
    color: blue900,
    textAlign: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  stepBarContainer: {
    flex: 1,
    height: '16%',
    maxHeight: '16%',
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
    borderRadius: helperIconContainerSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: helperIconContainerSize,
    flex: 1,
  },
  sidebarButton: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: gray400,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
    }),
  },
  buttonImage: {
    height: stepIconSize,
    width: stepIconSize,
    aspectRatio: 1 / 1,
  },
  snippetTitleContainer: {
    paddingBottom: '2%',
  },
  snippetTitle: {
    ...iOSUIKit.title3EmphasizedObject,
    textAlign: 'justify',
    fontFamily: 'Metropolis',
    fontWeight: '700',
    lineHeight: 20 * 1.2,
  },

  snippetParagraph: {
    ...Platform.select({
      android: {
        marginVertical: '0.5%',
      },
    }),
  },
  snippetStyle: {
    ...iOSUIKit.bodyObject,
    ...Platform.select({
      android: {
        textAlign: 'justify',
      },
      ios: {
        textAlign: 'left',
      },
    }),
    fontSize: 14,
    fontFamily: 'Metropolis',
  },
  workbookContent: {
    paddingHorizontal: '2.5%',
    paddingVertical: '1%',
    paddingTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  snippetButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  preFormHeader: {
    ...iOSUIKit.title3EmphasizedObject,
    textAlign: 'center',
    fontFamily: 'Metropolis',
    fontWeight: '700',
    lineHeight: 20 * 1.2,
  },
  preFormContentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    ...Platform.select({
      ios: {
        width: 80,
        height: 80,
      },
      android: {
        width:100,
        height:100
      },
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  preFormNextButton: {
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    height: buttonHeight,
    width: buttonWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  preFormNextButtonText: {
    fontFamily: 'Metropolis',
    color: white2,
    textAlign: 'center',
  },
  iconRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  trackLengthContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackLength: {
    ...iOSUIKit.title3EmphasizedObject,
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 28,
  },
  preFormButtonContainer: {
    flexGrow: 0,
  },
  fullWidth: {
    width: '100%',
  },
  formBackButton: {
    borderRadius: 15,
    width: 30,
    height: 30,
    borderColor: gray600,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },

  //DoneComponent
  doneContentContainer: {
    paddingHorizontal: 12,
  },
  doneTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '2%',
  },
  doneTitle: {
    ...iOSUIKit.subheadEmphasizedObject,
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 16,
  },
  doneTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  doneText: {
    ...iOSUIKit.footnoteObject,
    fontFamily: 'Metropolis',
    textAlign: 'center',
    fontSize: 14,
  },
  doneButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneButton: {
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    height: buttonHeight,
    width: buttonWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneButtontext: {
    ...iOSUIKit.caption2Object,
    textAlign: 'center',
    fontFamily: 'Metropolis',
    color: fontColor,
  },
  marginScrollViewElement: {
    marginRight: 8,
  },
  actualSnippetContainer: {
    marginVertical: 8,
  },
  actualSnippetText: {
    ...iOSUIKit.bodyEmphasizedObject,
    fontSize: 15,
    fontFamily: 'Metropolis',
    fontWeight: '700',
    textAlign: 'left',
  },
  formPlaceholderStyle: {
    ...iOSUIKit.bodyEmphasizedObject,
    textAlign: 'left',
    fontSize: 18,
    fontFamily: 'Metropolis',
  },
})
