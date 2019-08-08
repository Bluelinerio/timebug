import { StyleSheet } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import {
  gray900,
  SELF_ASSESSMENT
} from '2020_constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
  },
  title: {
    ...iOSUIKit.title3Emphasized,
    color: SELF_ASSESSMENT,
  },
  category: {
    ...iOSUIKit.title3Emphasized,
    fontSize: 18,
    color: SELF_ASSESSMENT,
  },
  dueTime: {
    ...iOSUIKit.title3Emphasized,
    fontSize: 18,
    color: SELF_ASSESSMENT,
  },
  goalText: {
    color: gray900,
  },
})
