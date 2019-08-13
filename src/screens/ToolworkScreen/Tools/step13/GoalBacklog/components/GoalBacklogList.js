// @flow
import React, { Fragment } from 'react'
import { View } from 'react-native'
import GoalButton from '../containers/GoalButtonContainer'
import { Goal } from '../../types'

type Props = {
  goals: Array<Goal>,
}

class GoalBacklogList extends React.PureComponent<Props> {
  render() {
    const { goals } = this.props
    return (
      <Fragment>
        <View>{goals.map(g => <GoalButton key={g.id} goal={g} />)}</View>
      </Fragment>
    )
  }
}

export default GoalBacklogList
