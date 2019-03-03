import { StyleSheet } from 'react-native'
import { darkBlue }   from '2020_constants/colors'

const helperIconSize = 40

const imageWidth = 55
const imageHeight = imageWidth

export const iconStyle = {
  fill: darkBlue,
  height: helperIconSize,
  width: helperIconSize,
}

export default StyleSheet.create({
  advisorIcon: {
    width: imageWidth,
    height: imageHeight,
    borderRadius: imageWidth / 2,
    aspectRatio: 1 / 1,
  },
})
