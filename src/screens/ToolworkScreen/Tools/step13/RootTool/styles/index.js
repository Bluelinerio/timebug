import { StyleSheet } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import {
  gray900
} from '2020_constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  categoryList: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
    justifyContent: 'space-around',
  },
  categoryButton: {
    width: '100%',
    height: 64,
    padding: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
  },
  categoryButtonText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
  },
  header: {
    flex: 1,
    height: 64,
    maxHeight: 64,
    flexDirection: 'row',
  },
  backButtonContainer: {
    justifyContent: 'center',
    padding: 8,
  },
  backButtonText: {
    marginLeft: 6,
    color: gray900,
    fontSize: 16,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'column',
    padding: 8,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 4,
  },
  subtitleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 4,
  },
  headerTitle: {
    ...iOSUIKit.title3EmphasizedObject,
    color: gray900,
  },
  headerSubtitle: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: gray900,
  },
})
