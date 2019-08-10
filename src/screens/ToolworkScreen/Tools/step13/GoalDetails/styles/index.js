import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import {
  gray900,
  gray400,
  gray50,
  SELF_ASSESSMENT,
  VISION_CREATION,
} from '2020_constants/colors'

export const completedColor = VISION_CREATION
export const incompleteColor = gray400

export const minimumTrackColor = SELF_ASSESSMENT
export const maximumTrackColor = gray400

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
  },
  title: {
    ...iOSUIKit.title3Emphasized,
    color: SELF_ASSESSMENT,
  },
  category: {
    ...iOSUIKit.title3Emphasized,
    fontSize: 18,
    color: SELF_ASSESSMENT,
  },
  dueTime: {
    ...iOSUIKit.title3Emphasized,
    fontSize: 18,
    color: SELF_ASSESSMENT,
  },
  goalText: {
    color: gray900,
  },
  subsectionTitle: {
    ...iOSUIKit.title3Emphasized,
    fontSize: 22,
    color: SELF_ASSESSMENT,
    marginVertical: 8,
  },
  substepContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: '100%',
    minHeight: 64,
    backgroundColor: gray50,
    flexDirection: 'row',
    marginVertical: 8,
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
  checkContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  substepTextContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingLeft: 4,
  },
  substepName: {
    ...iOSUIKit.title3Emphasized,
    color: gray900,
  },
})
