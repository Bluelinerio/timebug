import { StyleSheet, Platform }       from 'react-native'
import { iOSUIKit }                   from 'react-native-typography'
import { darkBlue, gray400, gray200 } from '2020_constants/colors'

export default StyleSheet.create({
  headerArea: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: '20%',
  },
  smallHeader: {
    paddingTop: 4,
    flex: 1,
    flexDirection: 'column',
    maxHeight: '10%',
  },
  subHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  subheaderButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    flex: 2,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: gray400,
    backgroundColor: gray200,
    marginBottom: 1,
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
    }),
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    ...iOSUIKit.subheadEmphasizedObject,
    textAlign: 'center',
    color: darkBlue,
  },
  tabTextUnselected: {
    ...iOSUIKit.subheadEmphasizedObject,
    textAlign: 'center',
    color: gray400,
  },
})
