import { StyleSheet } from 'react-native'
import { SELF_ASSESMENT } from '../../../constants/colors'

export const headerColor = SELF_ASSESMENT
export const buttonColor = SELF_ASSESMENT

export default StyleSheet.create({
  container: {
    flex: 1
  },
  workbookNextButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 999
  },
  flexibleHeightView: {
    backgroundColor: '#FAFAFA'
  },
})
