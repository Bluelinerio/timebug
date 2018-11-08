import { StyleSheet, Platform } from 'react-native'
import {
  paleBlue,
  azure,
  gray50,
  gray900,
  gray200,
  blue900,
  gray400,
  VISION_CREATION
}                               from '../../../constants/colors'
import { iOSUIKit }             from 'react-native-typography'
import hexToRgba                from '../../../utils/colorTransform'
import { widthPercentage }      from '../../../utils/viewportCalculation'

export const headerBackgroundColor = paleBlue
export const formTextColor = blue900
export const iconSize = 30
export const iconColor = gray50
export const completedColor = VISION_CREATION
export const incompleteColor = gray400
const indentSpace = 16

const horizontalComponentsWidth = widthPercentage(80)

export const minimumTrackColor = azure
export const maximumTrackColor = gray400

export const formStyles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'transparent',
    flex: 5,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formButtonContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flex: 1,
    padding: 8,
    marginBottom: 16,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formButtonContainerDual: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flex: 1,
    padding: 8,
    marginBottom: 16,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  formButton: {
    backgroundColor: azure,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    height: 50,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 12
      }
    })
  },
  formButtonText: {
    color: gray50
  },
  labelComponent: {
    fontFamily: 'Metropolis'
  },
  textInputLabelStyle: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    color: formTextColor,
    fontSize: 18
  },
  textInputStyle: {
    color: gray900,
    fontFamily: 'Helvetica',
    fontSize: 16
  },
  textInputContainerStyle: {
    marginTop: 16,
    borderWidth: 0.5,
    borderColor: '#cccccc',
    paddingVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: hexToRgba(azure, 0.1),
    width: horizontalComponentsWidth,
    borderRadius: 4
  },
  buttonComponentContainer: {
    flexDirection: 'row',
    paddingTop: 16,
    marginTop: 8,
    justifyContent: 'space-around'
  },
  centeredButton: {
    justifyContent: 'center'
  },
  buttonComponentStyle: {
    backgroundColor: azure,
    minWidth: 80,
    borderRadius: 6,
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 1,
          height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 1
      }
    })
  },
  pickerContainer: {
    marginTop: 16
  },
  pickerStyle: {},
  pickerItemStyle: {
    color: gray900,
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 16
  },
  pickerBackground: {
    width: horizontalComponentsWidth,
    backgroundColor: hexToRgba(azure, 0.1),
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#cccccc'
  },
  listFormContainer: {
    alignItems: 'center',
    borderRadius: 6
    // ...Platform.select({
    //   android: { elevation: 2 },
    //   ios: {
    //     shadowColor: 'black',
    //     shadowOffset: {
    //       width: 1,
    //       height: 2
    //     },
    //     shadowOpacity: 0.3,
    //     shadowRadius: 1
    //   }
    // })
  },
  listElementContainer: {
    marginBottom: 8
  },
  listButtonStyle: {
    maxWidth: 80
  },
  listContentContainer: {
    marginTop: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignContent: 'flex-start'
  },
  listButtonTextStyle: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 16
  },
  textElementText: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    textAlign: 'justify',
    color: gray900,
    alignSelf: 'flex-start'
  },
  answersContainer: {
    padding: 16
  },
  answerText: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    textAlign: 'justify',
    color: gray900,
    alignSelf: 'flex-start'
  },
  indented: {
    paddingLeft: 16
  }
})

export default StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flexGrow: 1
  },
  contentContainer: {
    flex: 1
  },
  scrollViewContent: {
    flex: 1
  },
  prototypeBackground: {
    backgroundColor: paleBlue
  },
  text: {
    fontFamily: 'Metropolis'
  },
  icon: {
    fontSize: 22,
    color: gray50
  },
  bottomButtonText: {
    fontSize: 16,
    color: gray50
  },
  protoText: {
    ...iOSUIKit.bodyEmphasizedObject
  },
  buttonText: {
    ...iOSUIKit.bodyEmphasizedObject,
    textAlign: 'center',
    color: gray50
  },
  viewContainer: {
    flex: 1,
    padding: 16,
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  goalScreenViewContainer: {
    padding: 16
  },
  titleContainer: {
    marginBottom: 10
  },
  goalScreenTitle: {
    ...iOSUIKit.largeTitleEmphasizedObject,
    fontSize: 28,
    textAlign: 'justify',
    color: formTextColor
  },
  goalScreenSubtitle: {
    ...iOSUIKit.title3EmphasizedObject,
    textAlign: 'justify',
    color: formTextColor
  },
  goalScreenContent: {
    ...iOSUIKit.bodyEmphasizedObject,
    textAlign: 'justify',
    color: formTextColor
  },
  goalScreenSmall: {
    ...iOSUIKit.subheadEmphasizedObject,
    textAlign: 'justify',
    color: formTextColor
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
          height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 8
      }
    })
  },
  leftBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightBlock: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  elementIcon: {
    height: 40,
    width: 40,
    aspectRatio: 1 / 1
  },
  elementText: {
    ...iOSUIKit.bodyEmphasizedObject,
    textAlign: 'justify',
    color: formTextColor
  },
  leftIcon: {
    alignItems: 'flex-start',
    paddingLeft: 8
  },
  goalReviewTextBlock: {},
  goalReviewTextWithMargin: {
    marginBottom: 6
  },
  goalReviewIndent: {
    paddingLeft: indentSpace
  },
  goalReviewStepsIndent: {
    paddingLeft: indentSpace * 2
  },
  row: {
    flexDirection: 'row'
  },
  totalProgress: {
    flex: 1,
    paddingVertical: 6,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  textAreaContainer: {
    marginBottom: 16
  },
  textArea: {
    height: 80,
    borderRadius: 6,
    borderColor: gray400,
    borderWidth: 1,
    justifyContent: 'flex-start',
    backgroundColor: gray200
  },
  additionalInput: {
    color: gray900,
    fontFamily: 'Helvetica',
    fontSize: 16
  },
  optionsContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 8,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  optionButton: {
    backgroundColor: azure,
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderRadius: 12,
    height: 50,
    width: 110,
    maxWidth: 110,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 12
      }
    })
  },
  optionButtonText: {
    ...iOSUIKit.footnoteObject,
    textAlign: 'center',
    color: gray50
  }
})
