import * as React                            from 'react'
import { NavigationActions, StackNavigator } from 'react-navigation'
import { mapProps, compose }                 from 'recompose'
import styles                                from '../styles'
import MarkdownScreenComponent               from './Components/MarkdownScreenComponent'
import HeaderCloseButton                     from '../../components/HeaderCloseButton'

const MarkdownScreenContainer = compose(
  mapProps(props => ({
    ...props,
    ...props.navigation.state.params
  }))
)(MarkdownScreenComponent)

MarkdownScreenContainer.navigationOptions = ({ navigation: { dispatch } }) => ({
  headerStyle: styles.navigationOptionHeaderStyle,
  headerRight: (
    <HeaderCloseButton
      onPress={() => dispatch(NavigationActions.back())}
      pressColorAndroid={'white'}
      tintColor={'white'}
    />
  )
})

const MarkdownScreen = StackNavigator(
  {
    Markdown: {
      screen: MarkdownScreenContainer
    }
  },
  {
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1
    }
  }
)

// TODO: determin if it is required to fixDebounce:
//fixDebounce(MarkdownScreenNavigator)

export default MarkdownScreen
