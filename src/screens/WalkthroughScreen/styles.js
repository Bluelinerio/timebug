import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import Theme from './components/Theme';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const baseSpacing = Math.floor(width * 0.06);
const largeVerticalSpacing = Math.floor(height * 0.06);
const imageHeight = height * 0.55;
export const gradientColors = {
  start: '#B3E5FC',
  end: '#c6edff',
};

export default StyleSheet.create({
  screen: StyleSheet.absoluteFillObject,
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: baseSpacing,
  },
  container: {
    paddingHorizontal: baseSpacing,
    marginTop: largeVerticalSpacing + StatusBar.currentHeight,
    flexGrow: 1,
  },
  image: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    height: imageHeight,
    ...Platform.select({
      android: {
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 0, // needed for shadow
        width: width * 0.75,
        marginLeft: width * 0.125,
        marginRight: width * 0.125,
      },
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
        width: width * 0.75,
        marginLeft: width * 0.125,
        marginRight: width * 0.125,
      },
    }),
  },
  imageContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: imageHeight,
    ...Platform.select({
      android: {
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 0, // needed for shadow
        elevation: 10,
        width: width * 0.6,
        marginLeft: width * 0.2,
      },
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
      },
    }),
  },
  title: {
    marginTop: largeVerticalSpacing,
    color: '#00098A',
  },
  description: {
    marginTop: largeVerticalSpacing/2,
    color: '#00098A',
  },
});

export const theme = {
  ...Theme,
  typography: {
    color: '#666666',
    bold: 'Helvetica-Bold',
    semibold: 'Helvetica',
    normal: 'Helvetica-Medium',
    light: 'Helvetica-Light',
    header1: {
      fontSize: 48,
      lineHeight: 58,
      fontFamily: 'Helvetica',
    },
    header2: {
      fontSize: Math.ceil(height * 0.03),
      fontFamily: 'Metropolis',
      fontWeight: 'bold',
    },
    header3: {
      fontSize: Math.ceil(height * 0.027),
      fontFamily: 'Metropolis',
      fontWeight: 'bold',
    },
    large: {
      fontSize: 21,
      lineHeight: 21,
      fontFamily: 'Metropolis',
    },
    regular: {
      fontSize: 18,
      lineHeight: 18,
      fontFamily: 'Metropolis',
    },
    small: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: 'Helvetica',
    },
    micro: {
      fontSize: 8,
      lineHeight: 8,
      fontFamily: 'Metropolis',
    },
  },
  spacing: {
    tiny: 8,
    small: 16,
    base: 24,
    large: 48,
    xLarge: 64,
  },
};
