// @flow
import { 
  StyleSheet, 
  Dimensions 
}                     from 'react-native'
import styles         from '../styles';
import formStyles     from './templates'
import {
  BACKGROUND_COLOR
}                     from './templates'

export default StyleSheet.create({
  ...styles,
  workbookFormContainer: {
    flex: 1,
  },
  image: {
    width: null,
    height: Dimensions.get('window').width * 0.7,
    backgroundColor:BACKGROUND_COLOR
  },
  workbookNextButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 999,
  },
});