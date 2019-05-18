// @flow
import React from 'react'

type ToolRedirectProps = {
  onPress: (obj: { tool: any, step: any }) => any,
  tool: any,
  step: any,
  navigation: any,
}

class ToolRedirect extends React.PureComponent<ToolRedirectProps> {
  _didFocusSubscription = null

  _onPress = () => {
    const { step, tool, onPress } = this.props
    onPress({ step, tool })
  }

  componentDidMount() {
    this._didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      () => this._onPress()
    )
  }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove()
  }

  render() {
    return null
  }
}

export default ToolRedirect
