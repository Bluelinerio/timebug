import { StyleSheet } from 'react-native'
import { deepBlue, white2 } from '../../../constants/colors'

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
  },
  title: {
    fontSize: 22,
    fontFamily: 'Metropolis',
    color: white2,
  },
  imageContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '60%',
    width: '60%',
    aspectRatio: 1,
  },
})
