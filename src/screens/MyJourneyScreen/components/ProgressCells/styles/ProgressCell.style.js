import { StyleSheet, Platform } from 'react-native'
import {
  human,
  systemWeights
}                               from 'react-native-typography'

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
  suggestionText: {
    ...human.headlineWhiteObject,
    ...systemWeights.light,
    margin: 8
  },
  progressUnderlineText: {
    textAlign: 'center'
  }
})
