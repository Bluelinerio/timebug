// @flow
import React from 'react'
import { View, Text } from 'react-native'

type Props = {
  category: string,
}

class GoalListComponent extends React.PureComponent<Props> {
  render() {
    const { category } = this.props
    return (
      <View>
        <Text>Goal list c: {category}</Text>
      </View>
    )
  }
}

export default GoalListComponent
