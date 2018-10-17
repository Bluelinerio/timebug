import { StyleSheet } from 'react-native'
import { MEDITATION } from '../../../constants/colors'

export const headerColor = MEDITATION
export const buttonColor = MEDITATION

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
