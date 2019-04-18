import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit }             from 'react-native-typography'
import {
  darkBlue,
  azure,
  white2,
  red500,
  cyan500,
  yellow500,
}                               from '2020_constants/colors'
import {
  widthPercentage,
  heightPercentage,
}                               from '2020_utils/viewportCalculation'

const optionsWidth = widthPercentage(60)
const optionsHeight = heightPercentage(15)

const legendHeight = heightPercentage(10)

export const circleContainerDimensions = heightPercentage(25, legendHeight)
export const circleRadius = heightPercentage(50, circleContainerDimensions)
export const displacement = heightPercentage(50, circleContainerDimensions)

export const sliderWidth = widthPercentage(100)

const slideWidth = widthPercentage(80, sliderWidth)
export const itemWidth = slideWidth

export const itemHeight = 400

export const iconColor = darkBlue

export const physicalColor = red500

export const spiritualColor = yellow500

export const emotionalColor = cyan500

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  fullWidth: {
    width: '100%',
  },
  carouselContainerTitleContainer: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContainerTitle: {
    ...iOSUIKit.footnoteEmphasizedObject,
    color: darkBlue,
    textAlign: 'center',
  },
  carouselContainer: {
    flex: 1,
    paddingVertical: 8,
  },
  chartContainer: {
    flex: 1,
    maxHeight: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  entry: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: '#FAFAFA',
    width: itemWidth,
    marginVertical: 2,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
    }),
  },
  slideInnerContainer: {
    flex: 1,
    width: slideWidth,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
  captionText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: darkBlue,
    textAlign: 'center',
  },
  subHeader: {
    maxHeight: '12.5%',
    height: '12.5%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  buttonHeaderArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBackButton: {
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBackText: {
    color: darkBlue,
    paddingHorizontal: 12,
  },
  toolContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  toolSectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContainer: {
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: optionsWidth,
    maxWidth: optionsWidth,
    height: optionsHeight,
    maxHeight: optionsHeight,
    backgroundColor: azure,
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
    }),
  },
  optionContainerText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: white2,
    textAlign: 'center',
  },
  padded: {
    padding: 16,
  },
  legendContainer: {
    flexDirection: 'row',
    height: legendHeight,
    maxHeight: legendHeight,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  legendElement: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  legendText: {
    ...iOSUIKit.bodyEmphasizedObject,
    fontSize: 9,
    color: darkBlue,
    textAlign: 'center',
    marginRight: 8,
  },
})

export const xAxesSvg = {
  fill: 'gray',
  fontSize: 9,
  fontWeight: 'bold',
}

export const yAxesSvg = {
  fill: 'gray',
  fontSize: 9,
}

export const verticalContentInset = { top: 5, bottom: 5 }

export const horizontalContentInset = { left: 15, right: 15 }

export const xAxisHeight = 30

export const yAxisWidth = 15

export const chartStyles = StyleSheet.create({
  chartContainer: { flex: 1, flexDirection: 'column', padding: 10 },
  yAxisContainer: { flex: 1, flexDirection: 'row' },
  chart: { flex: 1 },
  absoluteChart: { ...StyleSheet.absoluteFillObject, marginLeft: yAxisWidth },
  xAxis: { marginLeft: yAxisWidth, height: xAxisHeight },
  yAxis: { width: yAxisWidth },
})
