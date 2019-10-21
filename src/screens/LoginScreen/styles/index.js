//@flow
import { StyleSheet } from 'react-native'
import { white2, blue100, azure, gray600 } from '../../../constants/colors'
import { heightPercentage } from '../../../utils/viewportCalculation'

export const statusBarColor = white2

export const headerColor = azure
const headerHeight = heightPercentage(20)

const imageHeight = heightPercentage(25)
const imageWidth = imageHeight

export const closeButtonColor = gray600
export const closeButtonSize = 32

const iconContainerSize = closeButtonSize * 1.5

export const gradientColors = [white2, blue100]

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    flex: 1,
    backgroundColor: white2,
  },
  closeButtonContainer: {
    height: iconContainerSize,
    width: iconContainerSize,
    borderRadius: iconContainerSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeader: {
    flex: 0,
    flexDirection: 'row',
    height: headerHeight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  backButtonBlock: {
    justifyContent: 'flex-start',
  },
  headerBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    width: imageWidth,
    height: imageHeight,
    aspectRatio: 1 / 1,
  },
  textBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 15,
    fontFamily: 'Metropolis',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
