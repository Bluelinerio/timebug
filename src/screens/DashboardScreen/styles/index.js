// @flow
import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import {
  paleBlue,
  darkBlue,
  transparentCyan,
  white2,
} from '2020_constants/colors'
import { widthPercentage } from '2020_utils/viewportCalculation'

export const cellsWidth = widthPercentage(90)

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mainDashboardContainer: {
    paddingTop: 20,
  },
  scroll: {
    flexGrow: 1,
  },
  background: {
    backgroundColor: paleBlue,
  },
  contentContainer: {
    paddingVertical: 2,
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: paleBlue,
  },
  column: {
    flexDirection: 'column',
  },
  greetingContainer: {
    paddingRight: 8,
  },
  greetingHeader: {
    marginBottom: 4,
  },
  greeting: {
    ...iOSUIKit.title3EmphasizedObject,
    fontSize: 18,
    color: darkBlue,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  greetingSub: {
    ...iOSUIKit.bodyObject,
    textAlign: 'center',
    fontFamily: 'Metropolis',
    fontSize: 15,
    color: darkBlue,
    marginVertical: 8,
  },
  recommendation: {
    ...iOSUIKit.subheadObject,
    color: darkBlue,
    fontFamily: 'Metropolis',
  },
  recommendationEmphasized: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: darkBlue,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  insightContainer: {
    marginVertical: 12,
    marginHorizontal: 2,
  },
  insightTitle: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: darkBlue,
    fontStyle: 'italic',
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  insightText: {
    ...iOSUIKit.footnoteObject,
    color: darkBlue,
    fontStyle: 'italic',
    fontFamily: 'Metropolis',
  },
  checkinAreaContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 4,
  },
  checkinContainer: {
    minWidth: '100%',
    flexDirection: 'row',
    backgroundColor: transparentCyan,
    marginVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowOffset: { width: 3, height: 3 },
        shadowColor: darkBlue,
        shadowOpacity: 0.3,
      },
    }),
    borderColor: darkBlue,
  },
  checkinTitle: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: darkBlue,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  checkinText: {
    ...iOSUIKit.subheadObject,
    color: darkBlue,
    fontFamily: 'Metropolis',
  },
  link: {
    ...iOSUIKit.subheadObject,
    color: darkBlue,
    textDecorationLine: 'underline',
    fontFamily: 'Metropolis',
  },
  progressContainer: {
    padding: 12,
  },
  chartsArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartContainer: {
    marginHorizontal: 8,
  },
  stepIcon: {
    height: 70,
    width: 70,
  },
  checkinTextContainer: {
    flex: 3,
    padding: 8,
  },
  goalFormLink: {
    marginTop: 4,
  },
  signInButton: {
    padding: 12,
    backgroundColor: darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 4,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowOffset: { width: 3, height: 3 },
        shadowColor: darkBlue,
        shadowOpacity: 0.3,
      },
    }),
  },
  signInText: {
    ...iOSUIKit.subheadEmphasizedObject,
    textAlign: 'center',
    color: white2,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  notLoggedContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
})
