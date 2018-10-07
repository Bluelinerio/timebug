import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import type { Goal }                    from '../types'
import tron                             from 'reactotron-react-native'

type GoalComponentProps = {
  goal: Goal,
  onPress: () => any
}

class GoalComponent extends React.PureComponent<GoalComponentProps> {
  render() {
    const { goal, onPress } = this.props
    tron.log(this.props)
    return (
      <TouchableOpacity
        style={{ backgroundColor: 'red', padding: 16, margin: 20 }}
        onPress={onPress}
      >
        <View>
          <Text>{JSON.stringify(goal)}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default GoalComponent
