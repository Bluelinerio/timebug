// @flow
import { StyleSheet } from 'react-native'
import styles from '../styles';

export default StyleSheet.create({
  ...styles,
  workbookFormContainer: {
    flex: 1,
  },
  workbookNextButtonContainer: {
    height: 60,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 999,
  },
  workbookNextButton: {
    height: 60,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    zIndex: 999
  }
});