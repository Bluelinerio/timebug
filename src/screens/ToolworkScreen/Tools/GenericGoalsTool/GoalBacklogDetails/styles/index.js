import { StyleSheet } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { SELF_ASSESSMENT, gray900, gray50 } from '2020_constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 12,
  },
  detailsTitle: {
    ...iOSUIKit.title3EmphasizedObject,
    color: SELF_ASSESSMENT,
    textAlign: 'center',
  },
  text: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
  },
  category: {
    ...iOSUIKit.title3EmphasizedObject,
    fontSize: 18,
    color: SELF_ASSESSMENT,
  },
  detailsStandard: {
    ...iOSUIKit.title3EmphasizedObject,
    fontSize: 18,
    color: SELF_ASSESSMENT,
  },
  completionProgress: {
    ...iOSUIKit.title3EmphasizedObject,
    fontSize: 20,
    color: SELF_ASSESSMENT,
  },
  goalText: {
    color: gray900,
  },
  backloggedDetailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  outcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
  },
  goalOutcomeSelectorContainer: {
    borderColor: SELF_ASSESSMENT,
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalOutcomeSelector: {
    ...iOSUIKit.title3EmphasizedObject,
    color: gray900,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 16,
  },
  actionButton: {
    backgroundColor: SELF_ASSESSMENT,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 64,
    padding: 8,
    width: '50%',
    borderRadius: 6,
  },
  multipleActionsContainer: {
    justifyContent: 'space-around',
  },
  actionButtonSibling: {
    width: '40%',
  },
  actionText: {
    ...iOSUIKit.title3EmphasizedObject,
    color: gray50,
  },
})
