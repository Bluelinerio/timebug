//@flow
import { StyleSheet } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import {
  gray900,
  gray400,
  white2,
  paleBlue,
  blue100,
  deepBlue,
} from '../../../constants/colors';
import {
  heightPercentage,
  widthPercentage,
} from '../../../utils/viewportCalculation';

export const modalHeight = heightPercentage(40);
export const modalWidth = widthPercentage(80);
export const modalDetailsColor = paleBlue;

export const statusBarColor = gray900;

const headerHeight = heightPercentage(30, modalHeight);

const imageHeight = heightPercentage(25, modalHeight);
const imageWidth = imageHeight;

const closeButtonHeight = heightPercentage(50, headerHeight);
const closeButtonWidth = closeButtonHeight;
const closeButtonBorderRadius = closeButtonHeight;

export const closeButtonColor = gray400;
export const closeButtonSize = 20;
export const noAudioIconSize = 32;

const borderRadius = 12;

export const gradientColors = [white2, blue100];

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(33, 33, 33, 0.8)',
  },
  modal: {
    height: modalHeight,
    width: modalWidth,
    backgroundColor: white2,
    borderRadius: borderRadius,
    padding: 1,
    zIndex: 999,
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
  headerBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBlock: {
    justifyContent: 'flex-end',
  },
  headerIcon: {
    width: imageWidth,
    height: imageHeight,
    aspectRatio: 1 / 1,
  },
  closeButtonContainer: {
    width: closeButtonWidth,
    height: closeButtonHeight,
    borderRadius: closeButtonBorderRadius,
    borderWidth: 1,
    borderColor: gray400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  title: {
    ...iOSUIKit.bodyEmphasizedObject,
    textAlign: 'center',
    fontFamily: 'Metropolis',
    color: deepBlue,
  },
  titleContainer: {
    paddingHorizontal: 8,
  },
  modalBackgroundTouchable: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: widthPercentage(100),
    height: heightPercentage(100),
  },
  noAudiotext: {
    ...iOSUIKit.camption2Object,
    color: gray900,
    textAlign: 'center',
  },
  bottomModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
