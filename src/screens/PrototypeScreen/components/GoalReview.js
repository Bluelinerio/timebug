import React from 'react'
import { View, Text } from 'react-native'
import tron from 'reactotron-react-native'

class GoalReview extends React.PureComponent {
  render() {
    tron.log(this.props)
    return (
      <View>
        <Text>Under development!</Text>
      </View>
    )
  }
}

export default GoalReview
