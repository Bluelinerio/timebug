import { StyleSheet, LayoutAnimation } from 'react-native';

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
    elevation: 0,
  },
});

export const triggerAnimation = () =>
  LayoutAnimation.configureNext({
    duration: 400,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7,
    },
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: 0.7,
    },
  });
