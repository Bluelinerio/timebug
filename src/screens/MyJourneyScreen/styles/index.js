import { StyleSheet } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import { azure } from '../../../constants/colors';

export const stylesStep1 = {
  formContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderRadius: 6,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchContainer: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  caption: {
    ...iOSUIKit.subheadEmphasizedObject,
    fontSize: 18,
    fontFamily: 'Metropolis',
    textAlign: 'center',
  },
  yesNoHint: {
    ...iOSUIKit.subheadEmphasizedObject,
    fontFamily: 'Metropolis',
    textAlign: 'center',
  },
  congratulations: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: azure,
    fontFamily: 'Metropolis',
    textAlign: 'center',
  },
};

export default StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: '#005587',
  },
  container: {
    flex: 1,
  },
  tableContainer: {
    flexDirection: 'column',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  timeContainer: {
    flexDirection: 'column',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  elementRow: {
    paddingVertical: 6,
  },
  headerRowText: {
    ...iOSUIKit.footnoteEmphasizedObject,
  },
  element: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  elementText: {
    ...iOSUIKit.caption2EmphasizedObject,
    textAlign: 'center',
  },
  pillar: {
    flex: 2,
  },
  pillarText: {
    ...iOSUIKit.caption2EmphasizedObject,
    textAlign: 'left',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBox: {
    alignSelf: 'center',
  },
});
