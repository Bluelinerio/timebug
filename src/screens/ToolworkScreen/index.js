import React                                   from 'react'
import ToolworkScreen                          from './containers/ToolworkScreenContainer'
import { HeaderBackButton, NavigationActions } from 'react-navigation'
import { headerColor }                         from './styles'

ToolworkScreen.navigationOptions = ({ navigation: { dispatch, state } }) => {
  return {
    title: state.params.title
      ? state.params.title
      : `${state.params.tool.title}`,
    headerStyle: {
      backgroundColor: headerColor,
    },
    headerTintColor: 'white',
    headerLeft: (
      <HeaderBackButton
        tintColor="white"
        onPress={() => dispatch(NavigationActions.back())}
      />
    ),
  }
}

export default ToolworkScreen
