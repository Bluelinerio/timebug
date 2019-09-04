import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { gray900, gray50, SELF_ASSESSMENT } from '2020_constants/colors'

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
    backgroundColor: gray50,
    marginVertical: 10,
    ...Platform.select({
      android: { elevation: 8 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.6,
        shadowRadius: 6,
      },
    }),
  },
  categoryButtonText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
  },
  header: {
    minHeight: 64,
    flexGrow: 0,
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
  linkContainer: {
    minHeight: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    ...iOSUIKit.title3EmphasizedObject,
    textAlign: 'center',
    color: SELF_ASSESSMENT,
    marginVertical: 15,
  },
})