import { StyleSheet, Platform }       from 'react-native'
import {
  sanFranciscoWeights,
  robotoWeights,
  iOSUIKit
}                                     from 'react-native-typography'
import {
  white2,
  StartScreenButtonsColor,
  StartScreenBackgroundColor
}                                     from '../../../constants/colors'
import Viewport, { heightPercentage } from '../../../utils/viewportCalculation'
import { bannerHeight }               from '../../../styles/components/StartScreenBanner'

const containerColor = StartScreenBackgroundColor
const buttonColor = StartScreenButtonsColor
const fontColor = white2

const { viewportHeight } = Viewport
const remainderHeight = viewportHeight - bannerHeight
const versionHeight = heightPercentage(15, remainderHeight)

export const colors = {
  containerColor,
  fontColor,
  buttonColor
}

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
    paddingHorizontal: 20,
    marginBottom: 6,
    justifyContent: 'space-between'
  },
  buttonImage: {
    height: 64,
    width: 64,
    aspectRatio: 1 / 1
  },
  buttonText: {
    ...iOSUIKit.subheadEmphasizedObject,
    ...Platform.select({
      android: {
        ...robotoWeights.bold
      },
      ios: {
        ...sanFranciscoWeights.semibold
      }
    }),
    color: fontColor,
    fontFamily: 'Metropolis',
    
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
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  buttonImageContainer: {
    alignItems: 'flex-end'
  }
})
