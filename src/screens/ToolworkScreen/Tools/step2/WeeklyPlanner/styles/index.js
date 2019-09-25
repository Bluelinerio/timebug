import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { deepBlue, gray900, gray50 } from '2020_constants/colors'

export const iconColor = deepBlue
export const textColor = deepBlue

export const iconStyle = {
  color: iconColor,
  size: 24,
}

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  padded: {
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  scrollView: {
    flexGrow: 1,
  },
  fullWidth: {
    width: '100%',
  },
  weekTitleContainer: {
    flex: 1,
    maxHeight: 60,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  weekTitle: {
    ...iOSUIKit.title3EmphasizedObject,
    fontFamily: 'Metropolis',
    fontWeight: '700',
    textAlign: 'center',
    color: textColor,
  },
  weeklyToolContentContainer: {
    flex: 4,
  },
  weeklytableContainer: {
    flex: 2,
  },
  table: {
    flex: 1,
    flexDirection: 'column',
  },
  categoryColumn: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  categoryColumnText: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  diffColumn: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  columnTitle: {
    ...iOSUIKit.subheadEmphasizedObject,
    textAlign: 'center',
    fontFamily: 'Metropolis',
    fontWeight: '700',
    color: textColor,
  },
  categoryTitle: {
    textAlign: 'left',
  },
  rowTitle: {
    flex: 2,
    alignItems: 'flex-start',
  },
  rowData: {
    flex: 1,
    alignItems: 'flex-start',
  },
  diffData: {
    alignItems: 'center',
  },
  icon: {
    textAlign: 'center',
  },
  text: {
    ...iOSUIKit.footnoteObject,
    fontFamily: 'Metropolis',
    textAlign: 'center',
    color: textColor,
  },
  buttonText: {
    ...iOSUIKit.footnoteEmphasizedObject,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Metropolis',
    color: gray50,
  },
  categoryText: {
    textAlign: 'left',
  },
  actionsContainer: {
    flex: 1,
    marginTop: 16,
  },
  actionsToDoContainer: {
    marginVertical: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  actionTitle: {
    ...iOSUIKit.bodyEmphasizedObject,
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Metropolis',
    fontWeight: '700',
    color: textColor,
  },
  actionList: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingLeft: 8,
  },
  actionText: {
    ...iOSUIKit.subheadObject,
    fontFamily: 'Metropolis',
    textAlign: 'left',
    color: textColor,
  },
  buttonArea: {
    paddingVertical: 12,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    maxHeight: 52,
    minWidth: 60,
    maxWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: deepBlue,
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
    }),
  },
  sliderValueInputContainer: {
    borderWidth: 0.5,
    borderColor: '#cccccc',
    borderRadius: 4,
    flex: 1,
    maxHeight: 40,
    maxWidth: 80,
    flexDirection: 'column',
    marginRight: 0,
    marginLeft: 2,
  },
  sliderValueInput: {
    color: gray900,
    fontFamily: 'Metropolis',
    fontSize: 12,
    width: '100%',
    minHeight: 32,
  },
})
