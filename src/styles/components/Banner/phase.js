//@flow
import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit }             from 'react-native-typography'
import { paleBlue, gray400 }    from '../../../constants/colors'
import { widthPercentage }      from '../../../utils/viewportCalculation'

export const bannerColor = paleBlue

export default StyleSheet.create({
  header: {
    height: 110,
    maxHeight: 110,
    minHeight: 110,
    flexDirection: 'column',
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
  headerUpperRow: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerTitle: {
    ...iOSUIKit.bodyObject,
  },
  headerLowerRow: {
    flex: 1,
  },
  horizontalScrollContainer: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerUpperRowBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBlock: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  arrowContainer: {
    justifyContent: 'flex-start',
  },
  headerStep: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    maxWidth: widthPercentage(20),
    padding: 8,
    borderRadius: 6,
    marginHorizontal: 4,
    maxHeight: '90%',
  },
  headerStepText: {
    ...iOSUIKit.footnoteEmphasizedObject,
  },
  disabled: {
    backgroundColor: gray400,
  },
})
