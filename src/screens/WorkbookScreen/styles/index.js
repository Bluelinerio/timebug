// @flow
import { StyleSheet } from 'react-native'
import styles from '../styles';
import formStyles from './templates'
export default StyleSheet.create({
  ...styles,
  workbookFormContainer: {
    flex: 1,
  },
  workbookNextButtonContainer: {
    backgroundColor: formStyles.fieldset.backgroundColor,
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 999,
  },
});