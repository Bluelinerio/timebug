// @flow
import { StyleSheet }                          from 'react-native'
import { iOSUIKit }                            from 'react-native-typography'
import { paleBlue, darkBlue, transparentCyan } from '2020_constants/colors'
import { widthPercentage }                     from '2020_utils/viewportCalculation'

export const cellsWidth = widthPercentage(90)

export default StyleSheet.create({
  container: {
    flex: 1,
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
  },
  greetingSub: {
    ...iOSUIKit.footnoteEmphasizedObject,
    textAlign: 'center',
    color: darkBlue,
  },
  recommendation: {
    ...iOSUIKit.subheadObject,
    color: darkBlue,
  },
  recommendationEmphasized: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: darkBlue,
    fontStyle: 'italic',
  },
  insightContainer: {
    marginVertical: 12,
    marginHorizontal: 2,
  },
  insightTitle: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: darkBlue,
    fontStyle: 'italic',
  },
  insightText: {
    ...iOSUIKit.footnoteObject,
    color: darkBlue,
    fontStyle: 'italic',
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
  },
  checkinTitle: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: darkBlue,
  },
  checkinText: {
    ...iOSUIKit.subheadObject,
    color: darkBlue,
  },
  link: {
    ...iOSUIKit.subheadObject,
    color: darkBlue,
    textDecorationLine: 'underline',
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
})
