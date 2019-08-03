// @flow
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../styles'

type Props = {
  goal: any,
  onPress: any => void,
}

class GoalComponent extends React.PureComponent<Props> {
  _onPress = () => {
    const { onPress } = this.props
    if (onPress) onPress()
  }

  render() {
    const { goal } = this.props
    return (
      <TouchableOpacity style={styles.goalContainer} onPress={this._onPress}>
        <Text style={styles.goalText}>{goal.name}</Text>
      </TouchableOpacity>
    )
  }
}

export default GoalComponent
