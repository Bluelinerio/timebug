//@flow
import { StyleSheet, Platform } from 'react-native'
import { paleBlue } from '../../../constants/colors'
import {
  heightPercentage,
  widthPercentage
} from '../../../utils/viewportCalculation'

export const bannerHeight = heightPercentage(10)
export const bannerColor = paleBlue
/**
 * Upper row Sized at 25% of the whole banner
 */

export default StyleSheet.create({
  seekBarContainer: {
      flex: 1,
      flexDirection: 'row',
  },
  textContainer: {
      padding: 4,
      flexDirection: 'row'
  },
  sliderContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: "stretch",
      justifyContent: "center"
  },
  text: {
      color: '#212121'
  },
  slider: {
      backgroundColor: 'red'
  },
  thumbStyle:{
    backgroundColor: 'white',
    borderRadius: 100
  },
  trackStyle: {
    backgroundColor: 'gray'
  }
})
