import React from 'react'
import CompletedGoalElement from '../containers/CompletedGoalElementContainer'
import type { GoalWithToolData } from '../../common/types'

type Props = {
  goals: Array<GoalWithToolData>,
  setGoal: (goal: GoalWithToolData) => any,
}

class CompletedGoalsList extends React.PureComponent<Props> {
  render() {
    const { goals, setGoal } = this.props
    return (
      <React.Fragment>
        {goals.map(goal => (
          <CompletedGoalElement key={goal.id} goal={goal} onPress={setGoal} />
        ))}
      </React.Fragment>
    )
  }
}

export default CompletedGoalsList
