// @flow
import { StyleSheet } from 'react-native'
import styles from '../styles';

export default StyleSheet.create({
  ...styles,
  workbookFormContainer: {
    flex: 1,
  },
  workbookNextButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  workbookNextButton: {
    flex: 0,
    height: 60,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    zIndex: 999
  }
});