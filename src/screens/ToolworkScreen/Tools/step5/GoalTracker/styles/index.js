import { StyleSheet } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { azure } from '2020_constants/colors'

export default StyleSheet.create({
  goalArchiveLinkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 16,
  },
  goalArchiveLink: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: azure,
    fontWeight: '700',
    fontFamily: 'Metropolis',
  },
})
