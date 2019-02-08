import { StyleSheet }      from 'react-native'
import { paleBlue, azure } from '../../../constants/colors'

export const headerColor = azure

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  fullWidth: {
    width: '100%',
  },
  screenBackground: {
    backgroundColor: paleBlue,
  },
  padded: {
    paddingHorizontal: 20,
  },
})
