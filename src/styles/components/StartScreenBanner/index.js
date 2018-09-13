//@flow
import { StyleSheet, Platform }             from 'react-native'
import {
  sanFranciscoWeights,
  robotoWeights,
  iOSUIKit
}                                           from 'react-native-typography'
import { deepBlue, StartScreenBannerColor } from '../../../constants/colors'
import {
  heightPercentage,
  widthPercentage
}                                           from '../../../utils/viewportCalculation'

export const bannerHeight = heightPercentage(35)
export const bannerColor = StartScreenBannerColor
/**
 * Upper row Sized at 25% of the whole banner
 */

const mainRowHeight = heightPercentage(75, bannerHeight)

const imageHeight = heightPercentage(70, mainRowHeight)
const imageWidth = imageHeight

const avatarHeight = heightPercentage(80, bannerHeight - mainRowHeight)
const avatarWidth = avatarHeight

export default StyleSheet.create({
  header: {
    flex: 1,
    height: bannerHeight,
    flexDirection: 'column',
    backgroundColor: bannerColor
  },
  headerUpperRow: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'flex-end'
  },
  headerMainRow: {
    flex: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerIconContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentage(100)
  },
  headerTextContainer: {
    flex: 1,
    flexDirection: 'column',
    width: widthPercentage(100)
  },
  headerText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Metropolis',
    color: deepBlue
  },
  bannerTitle: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: deepBlue
  },
  headerIcon: {
    width: imageWidth,
    height: imageHeight,
    aspectRatio: 1 / 1
  },
  headerAvatar: {
    height: avatarHeight,
    width: avatarWidth,
    borderRadius: avatarHeight / 2,
    alignSelf: 'flex-end'
  },
  thin: {
    ...Platform.select({
      android: {
        ...robotoWeights.thin
      },
      ios: {
        ...sanFranciscoWeights.thin
      }
    })
  },
  strong: {
    ...Platform.select({
      android: {
        ...robotoWeights.bold
      },
      ios: {
        ...sanFranciscoWeights.semibold
      }
    })
  }
})
