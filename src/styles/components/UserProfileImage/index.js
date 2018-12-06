import { Platform, StyleSheet } from 'react-native';
import { iOSUIKit } from 'react-native-typography';

export default StyleSheet.create({
  myJourneyContainer: {
    paddingHorizontal: 3,
    paddingVertical: 3,
    marginTop: 6,
    borderRadius: 6,
    ...Platform.select({
      android: { elevation: 1 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
    }),
  },
  myJourneyText: {
    ...iOSUIKit.footnoteEmphasizedObject,
    color: '#00098A',
    fontSize: 16,
  },
});
