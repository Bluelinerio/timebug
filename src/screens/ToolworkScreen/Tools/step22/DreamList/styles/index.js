import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { white2, PHASE_3_COMPLETE } from '2020_constants/colors'

export const color = white2
export const size = 25

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  padded: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dreamToggle: {
    width: '100%',
    flexDirection: 'row',
    minHeight: 64,
    borderRadius: 6,
    padding: 4,
    backgroundColor: PHASE_3_COMPLETE,
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
  dreamDate: {
    ...iOSUIKit.caption2Object,
    fontFamily: 'Metropolis',
    color: white2,
  },
  dreamMainContent: {
    flex: 1,
    marginTop: 5,
  },
  dreamChoppedText: {
    ...iOSUIKit.bodyEmphasizedObject,
    fontFamily: 'Metropolis',
    color: white2,
  },
  dream: {
    marginVertical: 10,
  },
  hiddenView: {
    backgroundColor: white2,
    padding: 12,
    marginHorizontal: 8,
    borderRadius: 6,
    marginTop: -5,
    ...Platform.select({
      android: { elevation: 4 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 6,
      },
    }),
  },
  hiddenText: {
    ...iOSUIKit.bodyObject,
    fontSize: 15,
    fontFamily: 'Metropolis',
  },
  leftBlock: {
    flex: 4,
  },
  rightBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  editButton: {
    width: '35%',
    flexDirection: 'row',
    minHeight: 32,
    borderRadius: 6,
    padding: 4,
    marginTop: 4,
    backgroundColor: PHASE_3_COMPLETE,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      android: { elevation: 1 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.6,
        shadowRadius: 2,
      },
    }),
  },
  editButtonText: {
    ...iOSUIKit.bodyEmphasizedObject,
    fontSize: 15,
    fontFamily: 'Metropolis',
    color: white2,
  },
})
