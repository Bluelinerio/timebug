import { StyleSheet, Platform } from 'react-native';
import {
  iOSColors,
  iOSUIKit,
  sanFranciscoWeights,
  robotoWeights,
} from 'react-native-typography';

export default StyleSheet.create({
  strong: {
    ...Platform.select({
      android: {
        ...robotoWeights.bold,
      },
      ios: {
        ...sanFranciscoWeights.black,
      },
    }),
  },
  title: iOSUIKit.largeTitleEmphasizedObject,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: iOSColors.customGray,
  },
  cellHeader: iOSUIKit.title3EmphasizedObject,
});
