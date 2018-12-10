import { StyleSheet } from 'react-native'
import { greenA400, gray400 } from '../../../constants/colors'

export const checkboxColor = greenA400
export const uncheckedColor = gray400

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  checkBoxContainer: {
    flex: 1,
    marginBottom: 16,
  },
})
