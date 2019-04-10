import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit }             from 'react-native-typography'
import { darkBlue, white2 }     from '2020_constants/colors'
import {
  widthPercentage,
  heightPercentage,
}                               from '2020_utils/viewportCalculation'

const optionsWidth = widthPercentage(50)
const optionsHeight = heightPercentage(20)
export const iconColor = darkBlue

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  fullWidth: {
    width: '100%',
  },
  subHeader: {
    maxHeight: '12.5%',
    height: '12.5%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonHeaderArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  toolSectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContainer: {
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: optionsWidth,
    maxWidth: optionsWidth,
    height: optionsHeight,
    maxHeight: optionsHeight,
    backgroundColor: darkBlue,
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
  optionContainerText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: white2,
    textAlign: 'center',
  },
  padded: {
    padding: 16,
  },
})
