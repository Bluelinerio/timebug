import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit }             from 'react-native-typography'
import {
  paleBlue,
  azure,
  gray50,
  gray900,
  gray200,
  gray400,
  VISION_CREATION,
}                               from '2020_constants/colors'
import { formTextColor }        from '2020_forms/styles'
import { widthPercentage }      from '2020_utils/viewportCalculation'

export const headerBackgroundColor = paleBlue
export const completedColor = VISION_CREATION
export const incompleteColor = gray400
const indentSpace = 16

export const iconColor = azure

export const minimumTrackColor = azure
export const maximumTrackColor = gray400

const helperIconSize = 40

export const iconStyle = {
  fill: azure,
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
  contentContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flex: 1,
  },
  prototypeBackground: {
    backgroundColor: paleBlue,
  },
  text: {
    fontFamily: 'Metropolis',
  },
  icon: {
    fontSize: 22,
    color: gray50,
  },
  bottomButtonText: {
    fontSize: 16,
    color: gray50,
  },
  protoText: {
    ...iOSUIKit.bodyEmphasizedObject,
  },
  buttonText: {
    ...iOSUIKit.bodyEmphasizedObject,
    textAlign: 'center',
    color: gray50,
  },
  viewContainer: {
    flex: 1,
    padding: 16,
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    maxHeight: 60,
    height: 60,
    width: 160,
    padding: 10,
    borderRadius: 6,
    backgroundColor: azure,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalScreenViewContainer: {
    padding: 4,
  },
  titleContainer: {
    marginBottom: 10,
  },
  goalScreenTitle: {
    ...iOSUIKit.largeTitleEmphasizedObject,
    fontSize: 28,
    textAlign: 'justify',
    color: formTextColor,
  },
  goalScreenSubtitle: {
    ...iOSUIKit.title3EmphasizedObject,
    textAlign: 'justify',
    color: formTextColor,
  },
  goalScreenTypes: {
    ...iOSUIKit.bodyEmphasizedObject,
    fontSize: 16,
    textAlign: 'justify',
    color: formTextColor,
  },
  goalScreenContent: {
    ...iOSUIKit.bodyEmphasizedObject,
    textAlign: 'justify',
    color: formTextColor,
  },
  goalScreenSmall: {
    ...iOSUIKit.subheadEmphasizedObject,
    textAlign: 'justify',
    color: formTextColor,
  },
  elementContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: gray200,
    marginBottom: 10,
    padding: 10,
    maxHeight: 60,
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
    }),
  },
  leftBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBlock: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  elementIcon: {
    height: 40,
    width: 40,
    aspectRatio: 1 / 1,
  },
  elementText: {
    ...iOSUIKit.bodyEmphasizedObject,
    textAlign: 'justify',
    color: formTextColor,
  },
  leftIcon: {
    alignItems: 'flex-start',
    paddingLeft: 8,
  },
  goalReviewTextBlock: {},
  goalReviewTextWithMargin: {
    marginBottom: 6,
  },
  goalReviewIndent: {
    paddingLeft: indentSpace,
  },
  goalReviewStepsIndent: {
    paddingLeft: indentSpace * 2,
  },
  row: {
    flexDirection: 'row',
  },
  totalProgress: {
    flex: 1,
    paddingVertical: 6,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textAreaContainer: {
    marginBottom: 16,
    flex: 1,
  },
  textArea: {
    height: 80,
    maxWidth: widthPercentage(80),
    borderRadius: 6,
    borderColor: gray400,
    borderWidth: 1,
    justifyContent: 'flex-start',
    backgroundColor: gray200,
  },
  additionalInput: {
    maxWidth: widthPercentage(95, widthPercentage(80)),
    color: gray900,
    fontFamily: 'Helvetica',
    fontSize: 16,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: azure,
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderRadius: 12,
    height: 50,
    width: 80,
    maxWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
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
  optionButtonText: {
    ...iOSUIKit.footnoteObject,
    textAlign: 'center',
    color: gray50,
  },
  subHeader: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 40,
    minHeight: 40,
  },
  buttonHeaderArea: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  subheaderButton: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35 / 2,
  },
})
