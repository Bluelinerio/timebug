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
    fontFamily: 'Metropolis',
    fontWeight: '700',
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
    fontFamily: 'Metropolis',
    fontWeight: '700',
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
    fontFamily: 'Metropolis',
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
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  buttonTextContainer: {
    flex: 2,
    paddingHorizontal: 3,
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
    height: 60,
    width: 60,
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
})
