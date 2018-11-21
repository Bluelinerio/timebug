import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type Props = {
  step: string,
  goToHelpScreen: () => any
}

class HelpButton extends React.PureComponent<Props> {
  _onPress = () => {
    const { step, goToHelpScreen } = this.props
    goToHelpScreen(step)
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          height: 80,
          width: 80,
          backgroundColor: 'blue',
          alignSelf: 'center'
        }}
        onPress={this._onPress}
      >
        <Text>Need help?</Text>
      </TouchableOpacity>
    )
  }
}

export default HelpButton
