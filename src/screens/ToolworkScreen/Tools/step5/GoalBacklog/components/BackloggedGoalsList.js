import React from 'react'
import BackloggedGoalElement from '../containers/BackloggedGoalElementContainer'
import type { GoalWithToolData } from '../../common/types'

type Props = {
  goals: Array<GoalWithToolData>,
  setGoal: (goal: GoalWithToolData) => any,
}

class BackloggedGoalsList extends React.PureComponent<Props> {
  render() {
    const { goals, setGoal } = this.props
    return (
      <React.Fragment>
        {goals.map(goal => (
          <BackloggedGoalElement key={goal.id} goal={goal} onPress={setGoal} />
        ))}
      </React.Fragment>
    )
  }
}

export default BackloggedGoalsList
