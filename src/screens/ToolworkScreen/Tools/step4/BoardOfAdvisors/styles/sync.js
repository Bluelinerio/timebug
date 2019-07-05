import { StyleSheet } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { gray900, darkBlue, gray400, gray100 } from '2020_constants/colors'

export const placeholderColor = gray400
export const indicatorColor = darkBlue

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    ...iOSUIKit.footnoteEmphasizedObject,
    textAlign: 'center',
    color: gray900,
  },
  indicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  advisorSyncHeader: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 50,
    minHeight: 50,
  },
  listArea: {
    flex: 6,
  },
  syncList: {
    height: '100%',
    backgroundColor: gray100,
  },
  bordered: {
    borderColor: gray900,
    borderTopWidth: 1,
  },
  buttonHeaderArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  advisorSyncNameContainer: {
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  advisorSyncName: {
    ...iOSUIKit.subtitleEmphasizedObject,
    color: darkBlue,
  },
  contactTile: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: gray100,
  },
  contactImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactImage: {
    width: 50,
    height: 50,
    aspectRatio: 1 / 1,
  },
  contactTileNameContainer: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  contactName: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
  },
  searchBarContainer: {
    backgroundColor: gray100,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  warningContainer: {
    marginVertical: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningText: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
    textAlign: 'center',
  },
  link: {
    color: darkBlue,
    textDecorationLine: 'underline',
  },
})
