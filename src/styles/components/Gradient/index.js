import { StyleSheet } from 'react-native';

export const colors = {
  startGradientColor: 'white',
  endGradientColor: '#f8f8f8',
};

export default StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 1,
  },
});
