import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import {
  white2,
  gray900,
  gray50,
  PHASE_3_COMPLETE,
} from '2020_constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  padded: {
    paddingBottom: 12,
    paddingHorizontal: 20,
  },
  dreambookTextStyle: {
    ...iOSUIKit.bodyObject,
    fontFamily: 'Metropolis',
    minHeight: '50%',
    width: '100%',
    backgroundColor: gray50,
    color: gray900,
    borderRadius: 6,
    padding: 8,
    marginVertical: 12,
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
  dreambookTopText: {
    ...iOSUIKit.bodyEmphasizedObject,
    fontFamily: 'Metropolis',
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '50%',
    minHeight: 64,
    backgroundColor: PHASE_3_COMPLETE,
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
  saveButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  saveButtonText: {
    ...iOSUIKit.bodyEmphasizedObject,
    fontFamily: 'Metropolis',
    color: white2,
  },
})
