import { StyleSheet, Platform } from 'react-native'
import {
  human,
  systemWeights,
  iOSColors,
  iOSUIKit,
  material,
  sanFranciscoWeights,
  robotoWeights
} from 'react-native-typography'

const suggestionRow = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
}

export const scrollViewHorizontalPadding = 16
export const grayColor = '#ccc'

export default StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        elevation: 16
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 16
        },
        shadowOpacity: 0.2,
        shadowRadius: 16
      }
    })
  },
  horizontalScrollView: {
    marginTop: 20
  },
  dashboardContainer: {
    marginHorizontal: 16
  },
  dashboardCardWide: {
    marginTop: 24,
    marginBottom: 40,
    marginHorizontal: 16,
    padding: 12,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: iOSColors.white,
    borderRadius: 6
  },
  dashboardCard: {
    marginTop: 24,
    marginBottom: 40,
    marginHorizontal: 16,
    padding: 12,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: iOSColors.white,
    borderRadius: 6,
    ...Platform.select({
      android: { elevation: 16 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 16
        },
        shadowOpacity: 0.2,
        shadowRadius: 16
      }
    })
  },
  leaderboardContainer: {
    marginRight: 10,
    paddingTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 6,
    ...Platform.select({
      android: { 
        elevation: 2
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 2
      }
    })
  },
  pieChartContainer: {
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 6,
    ...Platform.select({
      android: { 
        elevation: 2
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 2
      }
    })
  },
  suggestionRow,
  suggestionRowBottom: {
    ...suggestionRow,
    marginTop: 4
  },
  dashboardContainerCard: {
    height: 40
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject
  },
  suggestionText: {
    ...human.headlineWhiteObject,
    ...systemWeights.light,
    margin: 8
  },
  bold: {
    ...systemWeights.bold
  },
  bigSuggestion: {
    flex: 2,
    aspectRatio: 1
  },
  bigSuggestionWithText: {
    flex: 2,
    borderRadius: 6
  },
  smallSuggestionMarginTop: {
    marginTop: 4
  },
  smallSuggestionMarginLeft: {
    marginLeft: 4
  },
  smallSuggestion: {
    flex: 1,
    aspectRatio: 1
  },
  strong: {
    ...Platform.select({
      android: {
        ...robotoWeights.bold
      },
      ios: {
        ...sanFranciscoWeights.black
      }
    })
  },
  emogi: {
    ...Platform.select({
      android: {
        ...material.display3Object
      },
      ios: {
        ...material.display3Object
        //...human.largeTitleObject,
      }
    }),
    textAlign: 'center'
  },
  title: iOSUIKit.largeTitleEmphasizedObject,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: iOSColors.customGray,
  },
  reset: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: iOSColors.blue,
    borderRadius: 6,
    padding: 8,
  },
  resetText: {
    color: '#FAFAFA'    
  },
  headerDate: {
    ...iOSUIKit.footnoteEmphasizedObject,
    color: iOSColors.gray
  },
  headerAvatar: {
    height: 44,
    width: 44,
    borderRadius: 44 / 2,
    alignSelf: 'center',
  }
})
