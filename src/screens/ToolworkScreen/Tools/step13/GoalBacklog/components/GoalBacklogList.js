// @flow
import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import { Goal } from '../../types'

type Props = {
  goals: Array<Goal>,
}

class GoalBacklogList extends React.PureComponent<Props> {
  render() {
    const { goals } = this.props
    return (
      <Fragment>
        {goals.map(g => (
          <View key={g.id}>
            <Text>{g.name}</Text>
          </View>
        ))}
      </Fragment>
    )
  }
}

export default GoalBacklogList
