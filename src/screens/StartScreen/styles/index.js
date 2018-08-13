import { StyleSheet, Dimensions } from 'react-native'
import { deepBlue, white2, white } from '../../../constants/colors'

import { bannerHeight } from '../../../styles/components/StartScreenBanner'

const { height: viewportHeight } = Dimensions.get(
  'window'
)

const containerColor = white
const buttonColor = deepBlue
const fontColor = white2

const versionHeight = viewportHeight * 0.08

export const colors = {
  containerColor,
  fontColor,
  buttonColor
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: containerColor
  },
  full: {
    height: viewportHeight,
    minHeight: viewportHeight
  },
  buttonContainer: {
    flex: 1,
    padding: 20
  },
  button: {
    backgroundColor: buttonColor,
    borderRadius: 6,
    padding: 20,
    marginVertical: 10
  },
  buttonText: {
    color: fontColor
  },
  versionContainer: {
      maxHeight: versionHeight,
      height: versionHeight
  }
})
