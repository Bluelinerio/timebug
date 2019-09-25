import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { darkBlue, gray50, cyan } from '2020_constants/colors'

const imageWidth = 50
const imageHeight = imageWidth

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  fullWidth: {
    width: '100%',
  },
  padded: {
    padding: 20,
  },
  advisorList: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  stepButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  stepButton: {
    flex: 1,
    minHeight: 50,
    minWidth: 100,
    maxHeight: 60,
    maxWidth: 150,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: darkBlue,
    borderRadius: 20,
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
  stepButtonText: {
    ...iOSUIKit.calloutEmphasizedObject,
    color: gray50,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  advisorTileContainer: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: cyan,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    ...Platform.select({
      android: { elevation: 4 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
    }),
  },
  advisorImageSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  advisorIcon: {
    width: imageWidth,
    height: imageHeight,
    borderRadius: imageWidth / 2,
    aspectRatio: 1 / 1,
  },
  advisorContent: {
    flex: 3,
    flexDirection: 'column',
  },
  advisorTextContent: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  advisorName: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: darkBlue,
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  advisorCategory: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: darkBlue,
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  advisorSyncLink: {
    ...iOSUIKit.footnoteEmphasizedObject,
    color: darkBlue,
    textDecorationLine: 'underline',
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  contactName: {
    ...iOSUIKit.footnoteEmphasizedObject,
    color: darkBlue,
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
  advisorSyncContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  paddedLink: {
    paddingVertical: 5,
  },
})
