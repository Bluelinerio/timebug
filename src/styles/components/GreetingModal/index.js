import { StyleSheet } from 'react-native'
import { deepBlue, white2 } from '../../../constants/colors'

export const gradientColors = [deepBlue, white2]

export default StyleSheet.create({
  greetingModalContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: deepBlue,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Metropolis',
    color: white2,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 500,
    width: 300,
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
