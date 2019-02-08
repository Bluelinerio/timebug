import { StyleSheet } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { darkBlue } from '2020_constants/colors'

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
  padded: {
    padding: 20,
  },
  dateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 30,
    marginVertical: 4,
  },
  date: {
    ...iOSUIKit.subheadEmphasizedObject,
    textAlign: 'center',
    fontFamily: 'Metropolis',
    fontWeight: '700',
    color: darkBlue,
  },
})
