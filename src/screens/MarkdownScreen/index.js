import * as React from 'react'
import { NavigationActions } from 'react-navigation'
import { StackNavigator } from 'react-navigation'
import { compose } from 'recompose'
import styles from './styles'
import MarkdownScreenComponent from './Components/MarkdownScreenComponent'
import HeaderCloseButton from '../../components/HeaderCloseButton'
import { mapProps } from 'recompose'

const destructureScreenProps = Component =>
  compose(
    mapProps(props => ({
      ...props,
      ...props.screenProps
    }))
  )(Component)

// de-structure what's passed to screenProps into props:
const MarkdownScreenContainer = destructureScreenProps(MarkdownScreenComponent)

MarkdownScreenContainer.navigationOptions = ({ navigation: { dispatch } }) => ({
  headerStyle: styles.navigationOptionHeaderStyle,
  headerRight: (
    <HeaderCloseButton
      onPress={() => {
        debugger
        dispatch(NavigationActions.back())
      }}
      pressColorAndroid={'white'}
      tintColor={'white'}
    />
  )
})

const MarkdownNavigator = StackNavigator({
  Markdown: {
    screen: MarkdownScreenContainer
  }
})

export default props => (
  // pass navigation action params that's passed to the StackNavigator to the screeProps
  <MarkdownNavigator screenProps={props.navigation.state.params} />
)
