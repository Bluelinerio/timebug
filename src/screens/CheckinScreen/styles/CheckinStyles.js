import { StyleSheet, Platform } from 'react-native'
import {
  sanFranciscoWeights,
  robotoWeights,
  iOSUIKit,
}                               from 'react-native-typography'
import { white2, deepBlue }     from '../../../constants/colors'

const fontColor = white2

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  full: {},
  stepText: {
    ...iOSUIKit.subheadEmphasizedObject,
    ...Platform.select({
      android: {
        ...robotoWeights.bold,
      },
      ios: {
        ...sanFranciscoWeights.bold,
      },
    }),
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 6,
    justifyContent: 'space-between',
  },
  stepTitleText: {
    ...iOSUIKit.footnoteEmphasizedObject,
    ...Platform.select({
      android: {
        ...robotoWeights.bold,
      },
      ios: {
        ...sanFranciscoWeights.bold,
      },
    }),
  },
  subtitle: {
    ...iOSUIKit.caption2Object,
    ...Platform.select({
      android: {
        ...robotoWeights.normal,
      },
      ios: {
        ...sanFranciscoWeights.normal,
      },
    }),
  },
  strong: {
    ...Platform.select({
      android: {
        ...robotoWeights.regular,
      },
      ios: {
        ...sanFranciscoWeights.semibold,
      },
    }),
  },
  buttonTextContainer: {
    flex: 3,
    paddingHorizontal: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderLeftWidth: 1,
    paddingVertical: 8,
    borderColor: fontColor,
  },
  buttonImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    height: 40,
    width: 40,
    maxHeight: 80,
    maxWidth: 80,
    alignSelf: 'center',
    aspectRatio: 1 / 1,
  },
  buttonText: {
    color: fontColor,
    fontFamily: 'Metropolis',
    textAlign: 'justify',
  },
  mainComponent: { flex: 4 },
  mainComponentTopRow: { flex: 1, flexDirection: 'row' },
  mainComponentBottomRow: {
    paddingTop: 8,
  },
  secondaryComponent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  phase1Incomplete: {
    color: deepBlue,
  },
  phase2Incomplete: {
    color: fontColor,
  },
  phase3Incomplete: {
    color: fontColor,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 6,
  },
  subtitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
})
