import { StyleSheet } from 'react-native'
import { deepBlue, white2 } from '../../../constants/colors'

export const gradientColors = ['#008EBC', '#005587']

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
  },
  title: {
    fontFamily: 'Metropolis',
    fontSize: 22,
    color: white2,
    textAlign: 'center',
    fontWeight: "700",
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
