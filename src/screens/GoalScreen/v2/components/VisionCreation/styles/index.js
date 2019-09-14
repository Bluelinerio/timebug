import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import {
  gray900,
  gray50,
  VISION_CREATION,
  PHASE_3_COMPLETE,
} from '2020_constants/colors'

const helperIconSize = 40

export const baseIconStyle = {
  height: helperIconSize,
  width: helperIconSize,
}

export const iconStyle = {
  ...baseIconStyle,
  fill: PHASE_3_COMPLETE,
}

export const color = PHASE_3_COMPLETE

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
    padding: 10,
    borderRadius: 8,
    maxHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: gray50,
    marginBottom: 10,
    flexDirection: 'row',
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
    paddingHorizontal: 16,
  },
  backButtonContainer: {
    justifyContent: 'center',
  },
  backButtonText: {
    marginLeft: 6,
    color: gray900,
    fontSize: 16,
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
    color: VISION_CREATION,
    marginVertical: 15,
  },
  lockedText: {
    ...iOSUIKit.title3EmphasizedObject,
    textAlign: 'center',
    color: gray900,
    padding: 8,
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
    color: PHASE_3_COMPLETE,
  },
})
