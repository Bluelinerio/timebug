import { StyleSheet, Platform }               from 'react-native'
import { iOSUIKit }                           from 'react-native-typography'
import { darkBlue, gray50, gray400, gray200 } from '2020_constants/colors'

export default StyleSheet.create({
  headerArea: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: '20%',
  },
  smallHeader: {
    paddingTop: 4,
    flex: 1,
    flexDirection: 'column',
    maxHeight: '10%',
  },
  subHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  subheaderButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    flex: 2,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: gray400,
    backgroundColor: gray200,
    marginBottom: 1,
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
    }),
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    ...iOSUIKit.subheadEmphasizedObject,
    textAlign: 'center',
    color: darkBlue,
  },
  tabTextUnselected: {
    ...iOSUIKit.subheadEmphasizedObject,
    textAlign: 'center',
    color: gray400,
  },
  // Goals details
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  goalDataCard: {
    padding: 8,
    flexDirection: 'column',
    borderRadius: 6,
    backgroundColor: gray200,
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
    }),
  },
  goalReviewTextBlock: {
    marginVertical: 4,
  },
  goalReviewTextWithMargin: {
    marginTop: 8,
  },
  goalOutcomeTextContainer: {
    marginTop: 24,
    paddingVertical: 8,
  },
  goalOutcomeText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: darkBlue,
    textAlign: 'center',
  },
  goalOutcomeSelectorContainer: {
    alignSelf: 'center',
    marginVertical: 4,
    borderWidth: 1,
    borderColor: darkBlue,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalOutcomeSelector: {
    ...iOSUIKit.bodyEmphasizedObject,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: darkBlue,
    width: 100,
    maxWidth: 100,
  },
  optionButtonText: {
    ...iOSUIKit.subheadEmphasizedObject,
    textAlign: 'center',
    color: gray50,
  },
})
