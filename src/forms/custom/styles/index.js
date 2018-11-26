import { StyleSheet, Platform } from 'react-native'
import hexToRgba from '../../../utils/colorTransform'
import { widthPercentage } from '../../../utils/viewportCalculation'
import { azure, gray50, gray900, blue900, gray400, greenA400 } from '../../../constants/colors'

export const formTextColor = blue900
export const iconSize = 30
export const iconColor = gray50

export const checkboxColor = greenA400
export const uncheckedColor = gray400

const horizontalComponentsWidth = widthPercentage(80)

const formStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default formStyles