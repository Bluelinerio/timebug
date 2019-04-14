import { StyleSheet, Platform }    from 'react-native'
import { iOSUIKit }                from 'react-native-typography'
import { darkBlue, azure, white2 } from '2020_constants/colors'
import {
  widthPercentage,
  heightPercentage,
}                                  from '2020_utils/viewportCalculation'

const optionsWidth = widthPercentage(60)
const optionsHeight = heightPercentage(15)

const slideWidth = widthPercentage(85)
const itemHorizontalMargin = widthPercentage(2)

export const sliderWidth = widthPercentage(80)
export const itemWidth = slideWidth + itemHorizontalMargin * 2

export const iconColor = darkBlue

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
  },
  carouselContainerTitle: {
    ...iOSUIKit.footnoteEmphasizedObject,
    color: darkBlue,
    textAlign: 'center',
  },
  chartContainer: {
    flex: 1,
    maxHeight: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  entry: {
    borderRadius: 6,
    paddingVertical: 5,
    backgroundColor: '#FAFAFA',
    minHeight: 400,
    ...Platform.select({
      android: {
        elevation: 2,
        margin: 3,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
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
})
