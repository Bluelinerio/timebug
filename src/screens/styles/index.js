import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // look at the 'styles' in react-navigation/src/views/Header/Header.js
  navigationOptionHeaderStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    borderBottomColor: 'transparent',
    shadowOpacity: 0,
    shadowColor: 'transparent',
    elevation: 0
  }
});
