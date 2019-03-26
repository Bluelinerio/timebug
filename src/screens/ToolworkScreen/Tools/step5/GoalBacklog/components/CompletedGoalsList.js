import React from 'react'
import CompletedGoalElement from '../containers/CompletedGoalElementContainer'
import type { GoalWithToolData } from '../../common/types'

type Props = {
  goals: Array<GoalWithToolData>,
}

class CompletedGoalsList extends React.PureComponent<Props> {
  render() {
    const { goals } = this.props
    return (
      <React.Fragment>
        {goals.map(goal => <CompletedGoalElement key={goal.id} goal={goal} />)}
      </React.Fragment>
    )
  }
}

export default CompletedGoalsList
