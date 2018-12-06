// @flow
import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

const wp = (percentage: number, port: number = viewportWidth): number => {
  const value = percentage * port / 100;
  return Math.round(value);
};

const percentage = 85;
const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(percentage);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
export const spinnerEvenColor = 'rgba(255, 255, 255, 0.4)';
export const spinnerUnEvenColor = 'rgba(0, 0, 0, 0.25)';
export const minimumItemHeight = wp(20, viewportHeight);
const entryBorderRadius = 16;

export default StyleSheet.create({
  carouselContainer: {
    marginBottom: 20,
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
        elevation: 4,
      },
      ios: {
        marginVertical: 30, // needed for shadow
        borderRadius: entryBorderRadius,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
    }),
  },
  slider: {
    marginTop: 25,
  },
  sliderContentContainer: {},
});
