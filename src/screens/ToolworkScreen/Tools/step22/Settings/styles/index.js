import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { gray50, gray400, PHASE_3_COMPLETE } from '2020_constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  setting: {
    flexDirection: 'row',
  },
  dreamNotificationTooltip: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dreamNotificationSwitch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: PHASE_3_COMPLETE,
  },
  pickerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    backgroundColor: PHASE_3_COMPLETE,
    height: 40,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
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
  disabledButton: {
    backgroundColor: gray400,
  },
  buttonText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray50,
    fontSize: 'Metropolis',
  },
  disabledButtonText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray50,
    fontSize: 'Metropolis',
  },
})
