// @flow
import React           from 'react'
import GoalListElement from '../containers/GoalListElementContainer'
import type { Goal }   from '../types'

type Props = {
  setGoal: Goal => any,
  goals: Array<Goal>,
}

class GoalsList extends React.PureComponent<Props> {
  render() {
    const { goals, setGoal } = this.props
    return (
      <React.Fragment>
        {goals.map(goal => (
          <GoalListElement key={goal._id} setGoal={setGoal} goal={goal} />
        ))}
      </React.Fragment>
    )
  }
}

export default GoalsList
