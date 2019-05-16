// @flow
import { StyleSheet }                        from 'react-native'
import { iOSUIKit }                          from 'react-native-typography'
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
  },
  settingTitle: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: darkBlue,
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
  },
  link: {
    ...iOSUIKit.subheadObject,
    color: darkBlue,
    textDecorationLine: 'underline',
  },
  settingTextContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  settingText: {
    ...iOSUIKit.bodyObject,
    marginLeft: 4,
    color: darkBlue,
  },
  switchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsList: {
    marginVertical: 4,
  },
})
