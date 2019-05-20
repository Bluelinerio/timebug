import { StyleSheet } from 'react-native'
import { darkBlue, white2 } from '2020_constants/colors'
import { iOSUIKit } from 'react-native-typography'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  padded: {
    padding: 12,
  },
  notification: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
    minHeight: 60,
    height: 60,
  },
  disclaimer: {
    textAlign: 'center',
    marginVertical: 12,
  },
  list: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'gray',
  },
  notificationTextContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  notificationButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationText: {
    ...iOSUIKit.bodyObject,
    fontSize: 14,
    color: darkBlue,
  },
  notificationType: {
    ...iOSUIKit.footnoteObject,
    color: darkBlue,
  },
  triggerButton: {
    flex: 1,
    backgroundColor: darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  triggerText: {
    ...iOSUIKit.footnoteEmphasizedObject,
    color: white2,
  },
})
