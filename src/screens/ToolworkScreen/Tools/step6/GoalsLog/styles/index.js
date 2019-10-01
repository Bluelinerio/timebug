import { StyleSheet, Platform } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import {
  white2,
  gray200,
  gray400,
  gray600,
  gray900,
  VISION_CREATION,
  deepBlue,
} from '2020_constants/colors'
import { heightPercentage } from '2020_utils/viewportCalculation'

export const iconSize = 24

export const iconColor = gray600

export const completedColor = VISION_CREATION
export const incompleteColor = gray400

const subHeaderHeight = heightPercentage(10)

const iconContainerSize = heightPercentage(95, subHeaderHeight)

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  padded: {
    padding: 16,
  },
  goalReviewContainer: {
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  subHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxHeight: subHeaderHeight,
  },
  backButtonContainer: {
    height: iconContainerSize,
    width: iconContainerSize,
    borderRadius: iconContainerSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalListElementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    padding: 4,
    marginBottom: 16,
    backgroundColor: gray200,
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
  goalListElementLeftBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalListElementMainContent: {
    flex: 4,
    flexDirection: 'column',
  },
  goalListRow: {
    flex: 1,
    padding: '0.5%',
    justifyContent: 'center',
  },
  goalListBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  goalListText: {
    ...iOSUIKit.bodyObject,
    fontSize: 15,
    color: deepBlue,
  },
  goalListTitle: {
    ...iOSUIKit.title3EmphasizedObject,
    color: deepBlue,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  goalListSubElement: {
    marginRight: 4,
  },
  goalNameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  goalName: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: gray900,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Metropolis',
  },
  goalDataTile: {
    paddingHorizontal: 25,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  goalSubdataContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  goalOwnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  goalOwner: {
    ...iOSUIKit.bodyEmphasizedObject,
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    color: gray900,
    fontFamily: 'Metropolis',
  },
  goalSubdata: {
    ...iOSUIKit.subheadEmphasizedObject,
    color: gray900,
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  estimateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  estimate: {
    ...iOSUIKit.caption2Object,
    textAlign: 'center',
    color: gray900,
    fontFamily: 'Metropolis',
  },
  planContainer: {
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: gray200,
    padding: 12,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  planHeader: {
    ...iOSUIKit.subheadObject,
    textAlign: 'left',
    marginBottom: 8,
    fontFamily: 'Metropolis',
  },
  plan: {
    ...iOSUIKit.subheadObject,
    textAlign: 'left',
    fontFamily: 'Metropolis',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    flex: 1,
    backgroundColor: deepBlue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    maxWidth: 360,
    marginHorizontal: 20,
    marginBottom: 20,
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
  actionButtonText: {
    ...iOSUIKit.calloutObject,
    color: white2,
    textAlign: 'center',
    fontFamily: 'Metropolis',
  },
})
