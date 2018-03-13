import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native'
import Theme from './components/Theme'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const baseSpacing = Math.floor(width * 0.06)
const largeVerticalSpacing = Math.floor(height * 0.06)
const imageHeight = height * 0.6
export const gradientColors = {
  start: '#008EBC',
  end: '#005587'
}

export default StyleSheet.create({
  screen: StyleSheet.absoluteFillObject,
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: baseSpacing
  },
  container: {
    paddingHorizontal: baseSpacing,
    marginTop: largeVerticalSpacing + StatusBar.currentHeight,
    flexGrow: 1
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
        marginLeft: width * 0.2
      },
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.5
      }
    })
  },
  title: {
    marginTop: largeVerticalSpacing,
    color: 'white'
  },
  description: {
    marginTop: largeVerticalSpacing,
    color: 'white'
  }
})

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
      fontFamily: 'Helvetica'
    },
    header2: {
      fontSize: Math.ceil(height * 0.04),
      fontFamily: 'Helvetica-Bold'
    },
    header3: {
      fontSize: Math.ceil(height * 0.027),
      fontFamily: 'HelveticaNeue',
      fontWeight: 'bold'
    },
    large: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: 'Helvetica'
    },
    regular: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: 'Helvetica'
    },
    small: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: 'Helvetica'
    },
    micro: {
      fontSize: 8,
      lineHeight: 8,
      fontFamily: 'Helvetica'
    }
  },
  spacing: {
    tiny: 8,
    small: 16,
    base: 24,
    large: 48,
    xLarge: 64
  }
}
