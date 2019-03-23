import { StyleSheet } from 'react-native'
import { iOSUIKit }   from 'react-native-typography'
import { azure }      from '2020_constants/colors'

export default StyleSheet.create({
  goalArchiveLinkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  goalArchiveLink: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: azure,
  },
})
