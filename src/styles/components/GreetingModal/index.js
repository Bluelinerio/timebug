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
    flex: 2,
  },
  title: {
    fontFamily: 'Metropolis',
    fontSize: 28,
    color: white2,
    textAlign: 'center',
    fontWeight: "700",
  },
  body: {
    fontFamily: 'Metropolis',
    fontSize: 18,
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
    height: 350,
    width: 210,
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
