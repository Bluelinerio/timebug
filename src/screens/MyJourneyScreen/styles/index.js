import { StyleSheet } from 'react-native'
import { iOSUIKit }   from 'react-native-typography'

export default StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: '#005587'
  },
  container: {
    flex: 1
  },
  timeContainer: {
    flexDirection: 'column',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  elementRow: {
    marginVertical: 6
  },
  headerRowText: {
    ...iOSUIKit.subheadEmphasizedObject
  },
  element: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  elementText: {
    ...iOSUIKit.subheadEmphasizedObject,
    textAlign: 'center'
  },
  pillar: {
    flex: 2
  },
  pillarText: {
    ...iOSUIKit.subheadEmphasizedObject,
    textAlign: 'left'
  }
})
