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
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  categoryButton: {
    width: '100%',
    height: 64,
    padding: 10,
    borderRadius: 8,
    maxHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: gray50,
    marginBottom: 10,
    flexDirection: 'row',
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
    }),
  },
  categoryButtonText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  header: {
    flexGrow: 0,
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  backButtonContainer: {
    justifyContent: 'center',
    padding: 8,
  },
  backButtonText: {
    marginLeft: 6,
    color: gray900,
    fontSize: 16,
    fontFamily: 'Metropolis',
  },
  headerContent: {
    flex: 1,
    flexDirection: 'column',
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
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  headerSubtitle: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: gray900,
    fontFamily: 'Metropolis',
    fontWeight: '700',
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
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  leftBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBlock: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  goalScreenTitle: {
    ...iOSUIKit.largeTitleEmphasizedObject,
    fontSize: 28,
    textAlign: 'justify',
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
})
