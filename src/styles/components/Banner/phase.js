//@flow
import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit }   from 'react-native-typography'
import { paleBlue } from '../../../constants/colors'
import {
  heightPercentage,
  widthPercentage
} from '../../../utils/viewportCalculation'

export const bannerHeight = heightPercentage(15)
export const bannerColor = paleBlue

const upperRowBlockWidth = widthPercentage(33.33, widthPercentage(100) - 32)

export default StyleSheet.create({
  header: {
    flex: 1,
    height: bannerHeight,
    maxHeight: bannerHeight,
    flexDirection: 'column',
    backgroundColor: bannerColor,
    ...Platform.select({
      android: { elevation: 8 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.6,
        shadowRadius: 6
      }
    })
  },
  headerUpperRow: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  headerTitle: {
    ...iOSUIKit.bodyObject
  },
  headerLowerRow: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  headerUpperRowBlock: {
    flex: 1,
    width: upperRowBlockWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleBlock: {
    justifyContent: 'flex-start'
  },
  arrowContainer: {
    justifyContent: 'flex-start'
  },
  headerStep: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: widthPercentage(15) - 32,
    maxHeight: heightPercentage(40, bannerHeight),
    borderRadius: 6,
  }
})
