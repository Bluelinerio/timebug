import { StyleSheet, StatusBar, Platform } from 'react-native'
import Theme                               from './components/Theme'
import {
  heightPercentage,
  widthPercentage,
}                                          from '../../utils/viewportCalculation'

const baseSpacing = widthPercentage(6)
const largeVerticalSpacing = heightPercentage(2)
const imageHeight = heightPercentage(70)
const imageWidth = widthPercentage(70)

export const gradientColors = {
  start: '#008EBC',
  end: '#005587',
}

export default StyleSheet.create({
  screen: {
    flexGrow: 1,
  },
  regularContainer: {
    paddingHorizontal: baseSpacing,
    paddingTop: largeVerticalSpacing + StatusBar.currentHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: baseSpacing,
  },
  container: {
    paddingHorizontal: baseSpacing,
    marginTop: largeVerticalSpacing + StatusBar.currentHeight,
    flex: 1,
  },
  image: {
    height: imageHeight,
    ...Platform.select({
      android: {
        borderRadius: 10,
      },
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
      },
    }),
  },
  imageContainer: {
    flex: 1,
    height: imageHeight,
    width: imageWidth,
    justifyContent:'center',
    ...Platform.select({
      android: {
        marginTop: largeVerticalSpacing,
        elevation: 10,
      },
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width:-5, height:-5},
        shadowRadius:10,
      },
    }),
  },
  title: {
    marginTop: -largeVerticalSpacing,
    marginBottom: largeVerticalSpacing,
    color: 'white',
  },
  description: {
    marginTop: largeVerticalSpacing,
    color: 'white',
  },
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
      fontFamily: 'Helvetica',
    },
    header2: {
      fontSize: heightPercentage(4),
      fontFamily: 'Helvetica-Bold',
    },
    header3: {
      fontSize: heightPercentage(2.7),
      fontFamily: 'HelveticaNeue',
      fontWeight: 'bold',
    },
    large: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: 'Helvetica',
    },
    regular: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: 'Helvetica',
    },
    small: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: 'Helvetica',
    },
    micro: {
      fontSize: 8,
      lineHeight: 8,
      fontFamily: 'Helvetica',
    },
  },
  spacing: {
    tiny: 8,
    small: 16,
    base: 24,
    large: 48,
    xLarge: 64,
  },
}
