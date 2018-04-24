import { StyleSheet } from 'react-native'

export const colors = {
  inactiveDotColor: '#1a1917rgba(255, 255, 255, 0.5)',
  dotColor: 'rgba(255, 255, 255, 0.92)',
  gray: '#888888'
}

export default StyleSheet.create({
  background: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    bottom: 16,
    paddingVertical: 20,
    borderRadius: 24,
  },
  paginatedCarouselContainer: {
    paddingTop: 60,
    paddingBottom: 60
  },
  paginatedCarouselContainerFeatherTop: {
    height: 40
  },
  slider: {
    marginTop: 25
  },
  sliderContentContainer: {},
  paginationContainer: {
    paddingVertical: 8
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0
  }
})
