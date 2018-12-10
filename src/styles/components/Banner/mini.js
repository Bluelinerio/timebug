//@flow
import { StyleSheet, Platform } from 'react-native';
import { paleBlue } from '../../../constants/colors';
import {
  heightPercentage,
  widthPercentage,
} from '../../../utils/viewportCalculation';

export const bannerHeight = heightPercentage(10);
export const bannerColor = paleBlue;

/**
 * Upper row Sized at 25% of the whole banner
 */

const imageHeight = heightPercentage(90, bannerHeight);
const imageWidth = imageHeight;

const avatarHeight = heightPercentage(60, bannerHeight);
const avatarWidth = avatarHeight;

const upperRowBlockWidth = widthPercentage(33.33, widthPercentage(100) - 32);

export default StyleSheet.create({
  header: {
    flex: 1,
    height: '10%',
    maxHeight: '10%',
    flexDirection: 'column',
    backgroundColor: bannerColor,
    ...Platform.select({
      android: { elevation: 8 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.6,
        shadowRadius: 6,
      },
    }),
  },
  headerUpperRow: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerUpperRowBlock: {
    flex: 1,
    width: upperRowBlockWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowContainer: {
    justifyContent: 'flex-start',
  },
  headerUserImageContainer: {
    justifyContent: 'flex-end',
  },
  headerIcon: {
    width: imageWidth,
    height: imageHeight,
    aspectRatio: 1 / 1,
  },
  headerAvatar: {
    height: avatarHeight,
    width: avatarWidth,
    borderRadius: avatarHeight / 2,
    alignSelf: 'flex-end',
  },
});
