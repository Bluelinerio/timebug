import { StyleSheet, Dimensions }          from 'react-native'
import { deepBlue }                        from '../../../constants/colors'
import { STATUSBAR_HEIGHT, APPBAR_HEIGHT } from '../../../constants'
import normalize                           from '../../../utils/normalizeText'
import topStyle                            from '../styles'

export const HEADER_HEIGHT = Dimensions.get('window').height * 0.4
export default StyleSheet.create({
  ...topStyle,
  screen: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginBottom: 30
  },
  content: {
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 20
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: normalize(20),
    fontWeight: '200',
    color: deepBlue,
    textAlign: 'left',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: normalize(28),
    fontWeight: 'bold',
    color: deepBlue,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  header: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT + APPBAR_HEIGHT(),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1
  }
})
