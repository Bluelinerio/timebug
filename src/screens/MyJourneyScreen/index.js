//@flow
import React                    from 'react'
import { StyleSheet }           from 'react-native'
import {
  HeaderBackButton,
  NavigationActions,
  StackNavigator
}                               from 'react-navigation'
import styles                   from './styles'
import MyJourneyScreenContainer from './containers/MyJourneyScreenContainer'

// const headerTitle: string = 'My Journey'

// type NavigationOptionsProps = {
//   navigation: {
//     dispatch: (any) => any
//   }
// }

// type NavigationOptions = {
//   title: string,
//   headerStyle: any,
//   headerTintColor: 'white' | string,
//   headerLeft: React.ComponentType<{tintColor: string, onPress: (any) => any}>
// }

// MyJourneyScreenContainer.navigationOptions = ({
//   navigation: { dispatch }
// }: NavigationOptionsProps) : NavigationOptions => ({
//   title: headerTitle,
//   headerStyle: {
//     ...StyleSheet.flatten(styles.header)
//   },
//   headerTintColor: 'white',
//   headerLeft: (
//     <HeaderBackButton
//       tintColor="white"
//       onPress={() => dispatch(NavigationActions.back())}
//     />
//   )
// })

// const MyJourneyScreen = StackNavigator(
//   {
//     Markdown: MyJourneyScreenContainer
//   },
//   {
//     headerMode: 'screen',
//     cardStyle: {
//       backgroundColor: 'white',
//       opacity: 1
//     }
//   }
// )

export default MyJourneyScreenContainer
