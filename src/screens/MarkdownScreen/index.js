import * as React              from 'react'
import { NavigationActions }   from 'react-navigation'
import { compose }             from 'recompose'
import styles                  from './styles'
import MarkdownScreenComponent from './Components/MarkdownScreenComponent'
import HeaderCloseButton       from '../../components/HeaderCloseButton'
import { mapProps }            from 'recompose'

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

export default MarkdownScreenContainer