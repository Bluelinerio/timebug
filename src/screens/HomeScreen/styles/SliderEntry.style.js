// @flow
import { StyleSheet, Dimensions, Platform } from 'react-native'
import { colors }                           from '../styles'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
)

function wp(percentage) {
  const value = percentage * viewportWidth / 100
  return Math.round(value)
}

const percentage = 85
const slideHeight = viewportHeight * 0.4
const slideWidth = wp(percentage)
const itemHorizontalMargin = wp(2)

export const sliderWidth = viewportWidth
export const itemWidth = slideWidth + itemHorizontalMargin * 2
export const spinnerEvenColor = 'rgba(255, 255, 255, 0.4)'
export const spinnerUnEvenColor = 'rgba(0, 0, 0, 0.25)'
const entryBorderRadius = 16

export default StyleSheet.create({
  sliderEntryTopRightIconContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'transparent',
    borderRadius: 14,
    borderWidth: 0,
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    backgroundColor: 'white',
    ...Platform.select({
      android: {
        paddingHorizontal: itemHorizontalMargin,
        borderRadius: entryBorderRadius,
        marginVertical: 0, // needed for shadow
        elevation: 4
      },
      ios: {
        marginVertical: 30, // needed for shadow
        borderRadius: entryBorderRadius,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 10
        },
        shadowOpacity: 0.2,
        shadowRadius: 10
      }
    })
  },
  imageContainer: {
    flex: 1,
    marginVertical: entryBorderRadius, // needed for shadow
    backgroundColor: 'white',
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  },
  imageContainerEven: {
    backgroundColor: colors.black
  },
  svg: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  },
  // image's border radius is buggy on ios let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white'
  },
  radiusMaskEven: {
    backgroundColor: colors.black
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius
  },
  textContainerEven: {
    backgroundColor: colors.black
  },
  title: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.5
  },
  titleEven: {
    color: 'white'
  },
  subtitle: {
    marginTop: 6,
    color: colors.gray,
    fontSize: 12,
    fontStyle: 'italic'
  },
  subtitleEven: {
    color: 'rgba(255, 255, 255, 0.7)'
  }
})
