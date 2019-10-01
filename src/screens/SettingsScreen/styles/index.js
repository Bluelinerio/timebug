// @flow
import { StyleSheet } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { paleBlue, darkBlue, facebookColor } from '2020_constants/colors'

export const headerColor = paleBlue

export const facebook = facebookColor

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  settingContainer: {
    marginVertical: 10,
  },
  title: {
    ...iOSUIKit.title3EmphasizedObject,
    color: darkBlue,
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  settingTitle: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: darkBlue,
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  genericRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: darkBlue,
    padding: 4,
    marginTop: 4,
  },
  settingRow: {
    marginVertical: 6,
  },
  facebookIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userFacebookData: {
    flex: 4,
    justifyContent: 'center',
  },
  facebookImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...iOSUIKit.bodyObject,
    color: darkBlue,
    fontFamily: 'Metropolis',
  },
  link: {
    ...iOSUIKit.subheadObject,
    color: darkBlue,
    textDecorationLine: 'underline',
    fontFamily: 'Metropolis',
  },
  settingTextContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  settingText: {
    ...iOSUIKit.bodyObject,
    marginLeft: 4,
    color: darkBlue,
    fontFamily: 'Metropolis',
  },
  switchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsList: {
    marginVertical: 4,
  },
  enableButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enableText: {
    ...iOSUIKit.subheadObject,
    color: darkBlue,
    textDecorationLine: 'underline',
    fontFamily: 'Metropolis',
  },
})
