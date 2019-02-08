// @flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles                           from '../styles'

type ToolRedirectProps = {
  onPress: (obj: { tool: any, step: any }) => any,
  tool: any,
  step: any,
}

class ToolRedirect extends React.PureComponent<ToolRedirectProps> {
  _onPress = () => {
    const { step, tool, onPress } = this.props
    onPress({ step, tool })
  }

  render() {
    return (
      <View style={[styles.container, styles.screenLockedContainer]}>
        <Text style={[styles.lockedTitle, styles.text]}>
          Keep on track on your goals using the Goal Tracking tool!
        </Text>
        <TouchableOpacity style={styles.button} onPress={this._onPress}>
          <Text style={[styles.text, styles.buttonText]}>
            Open goal tracker
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ToolRedirect
