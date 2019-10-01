import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import {
  gray900,
  darkBlue,
  gray400,
  gray50,
  white2,
} from '2020_constants/colors'

const imageWidth = 60
const imageHeight = imageWidth

export const iconColor = gray900
export const iconSize = 40

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bordered: {
    borderColor: gray900,
    borderTopWidth: 1,
  },
  advisorImageSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  advisorTextSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactSection: {
    marginTop: 16,
    marginBottom: 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  advisorIcon: {
    width: imageWidth,
    height: imageHeight,
    borderRadius: imageWidth / 2,
    aspectRatio: 1 / 1,
  },
  advisorName: {
    ...iOSUIKit.bodyEmphasizedObject,
    paddingVertical: 4,
    textAlign: 'center',
    color: darkBlue,
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  advisorCategory: {
    ...iOSUIKit.subheadEmphasizedObject,
    paddingVertical: 4,
    textAlign: 'center',
    color: darkBlue,
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  iconWrapper: {
    marginHorizontal: 12,
  },
  syncButton: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  syncText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: darkBlue,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  textAreaheader: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  logAreaContainer: {
    marginTop: 16,
  },
  textAreaContainer: {
    marginVertical: 12,
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    flex: 1,
    minHeight: 80,
    maxHeight: 80,
    borderRadius: 6,
    borderColor: gray400,
    borderWidth: 1,
    justifyContent: 'flex-start',
    backgroundColor: gray50,
  },
  additionalInput: {
    color: gray900,
    fontFamily: 'Helvetica',
    fontSize: 16,
  },
  saveButton: {
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: darkBlue,
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
    }),
  },
  saveButtonText: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: white2,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  advisorLogTitleContainer: {
    flex: 1,
    paddingTop: 12,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  advisorLogTitle: {
    ...iOSUIKit.title3EmphasizedObject,
    color: darkBlue,
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  advisorLog: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  advisorLogElement: {
    flex: 1,
    marginVertical: 8,
    padding: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: gray400,
    backgroundColor: gray50,
  },
  logDate: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: gray900,
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  logText: {
    ...iOSUIKit.subheadObject,
    color: gray900,
    fontFamily: 'Metropolis',
  },
})
