import { StyleSheet, Platform } from 'react-native'
import {
  iOSColors,
  iOSUIKit,
  sanFranciscoWeights,
  robotoWeights
} from 'react-native-typography'

export const scrollViewHorizontalPadding = 16
export const grayColor = '#ccc'

export default StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        elevation: 16
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 16
        },
        shadowOpacity: 0.2,
        shadowRadius: 16
      }
    })
  },
  strong: {
    ...Platform.select({
      android: {
        ...robotoWeights.bold
      },
      ios: {
        ...sanFranciscoWeights.black
      }
    })
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
  cellHeader: iOSUIKit.title3EmphasizedObject
  
})
