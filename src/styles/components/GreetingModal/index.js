import { StyleSheet, Dimensions } from 'react-native'
import { deepBlue, white2 } from '../../../constants/colors'

export const gradientColors = ['#008EBC', '#005587']
const screenWidth =  Dimensions.get('window').width

const responsiveTitleTextSize = screenWidth < 800 ? 22 : 28
const responsiveBodyTextSize = screenWidth < 800 ? 14 : 18
const responsiveImageWidth = screenWidth < 800 ? 165 : 210
const responsiveImageHeight = screenWidth < 800 ? 275 : 350

export default StyleSheet.create({
  greetingModalContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    flex: 2,
  },
  title: {
    fontFamily: 'Metropolis',
    fontSize: responsiveTitleTextSize,
    color: white2,
    textAlign: 'center',
    fontWeight: "700",
  },
  body: {
    fontFamily: 'Metropolis',
    fontSize: responsiveBodyTextSize,
    color: white2,
    textAlign: 'left',
    fontWeight: "400",
    marginTop:10, 
  },
  imageContainer: {
    width: '100%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    height: responsiveImageHeight,
    width: responsiveImageWidth,
  },
  backButtonRow: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: '100%',
  },
})
