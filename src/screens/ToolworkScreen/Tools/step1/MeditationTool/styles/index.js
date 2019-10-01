import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { darkBlue, gray50 } from '2020_constants/colors'

const textColor = darkBlue

export const stylesStep1 = {
  formContainer: {
    flexDirection: 'column',
    borderRadius: 6,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 159,
    maxHeight: 80,
    minHeight: 80,
    borderRadius: 6,
    backgroundColor: gray50,
  },
  caption: {
    ...iOSUIKit.subheadEmphasizedObject,
    fontSize: 18,
    fontFamily: 'Metropolis',
    textAlign: 'center',
    fontWeight: '700',
  },
  yesNoHint: {
    ...iOSUIKit.subheadEmphasizedObject,
    fontFamily: 'Metropolis',
    textAlign: 'center',
    fontWeight: '700',
  },
  congratulations: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: darkBlue,
    fontFamily: 'Metropolis',
    textAlign: 'center',
    fontWeight: '700',
  },
  streakText: {
    ...iOSUIKit.footnoteObject,
    color: darkBlue,
    fontFamily: 'Metropolis',
    textAlign: 'center',
  },
}

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
  toolTitleContainer: {
    flex: 1,
    maxHeight: 60,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  toolTitle: {
    ...iOSUIKit.title3EmphasizedObject,
    fontFamily: 'Metropolis',
    fontWeight: '700',
    textAlign: 'center',
    color: textColor,
  },
  toolContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: darkBlue,
    ...Platform.select({
      android: {
        paddingLeft: 7,
      },
      ios: {
        paddingLeft: 3,
        paddingTop: 6,
      },
    }),
  },
  iconArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  trackLengthContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  trackLength: {
    ...iOSUIKit.title3EmphasizedObject,
    color: darkBlue,
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 28,
  },
  text: {
    color: darkBlue,
  },
  captionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  caption: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: darkBlue,
    fontFamily: 'Metropolis',
    textAlign: 'center',
    fontWeight: '700',
  },
})
