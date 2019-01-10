import { StyleSheet }      from 'react-native'
import { paleBlue, azure } from '../../../constants/colors'

export const headerColor = azure

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  screenBackground: {
    backgroundColor: paleBlue,
  },
  scrollView: {
    flexGrow: 1,
  },
  fullWidth: {
    width: '100%',
  },
  padded: {
    padding: 20,
  },
})
