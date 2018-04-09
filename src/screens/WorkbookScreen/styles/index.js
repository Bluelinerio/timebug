// @flow
import { StyleSheet, Dimensions } from 'react-native';
import styles from '../styles';
import { BACKGROUND_COLOR } from './templates';

export default StyleSheet.create({
  ...styles,
  workbookFormContainer: {
    flex: 1
  },
  fullScreenScrollView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  flexibleHeightView: {
    backgroundColor: BACKGROUND_COLOR
  },
  image: {
    width: null,
    height: Dimensions.get('window').height * 0.3,
    backgroundColor: BACKGROUND_COLOR
  },
  workbookNextButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 999
  }
});
