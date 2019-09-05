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
    ...iOSUIKit.title3EmphasizedObject,
    color: SELF_ASSESSMENT,
  },
  category: {
    ...iOSUIKit.title3EmphasizedObject,
    fontSize: 18,
    color: SELF_ASSESSMENT,
  },
  detailsStandard: {
    ...iOSUIKit.title3EmphasizedObject,
    fontSize: 18,
    color: SELF_ASSESSMENT,
  },
  completionProgress: {
    ...iOSUIKit.title3EmphasizedObject,
    fontSize: 20,
    color: SELF_ASSESSMENT,
  },
  goalTimeLeft: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: SELF_ASSESSMENT,
    textAlign: 'center',
  },
  goalText: {
    color: gray900,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: 'row',
    width: '100%',
    minHeight: 64,
  },
  goalButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SELF_ASSESSMENT,
  },
  goalButtonText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray50,
    textAlign: 'center',
  },
  borderedButton: {
    borderRightWidth: 2,
    borderRightColor: gray400,
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
  textAreaContainer: {
    backgroundColor: gray50,
    minHeight: 64,
    width: '100%',
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    width: '80%',
  },
  additionalInput: {
    color: gray900,
    paddingHorizontal: 20,
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
  subscript: {
    ...iOSUIKit.caption2Object,
    marginLeft: 6,
  },
})
