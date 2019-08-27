// @flow
import React, { Fragment } from 'react'
import GoalComponent from '../containers/GoalContainer'

type Props = {
  goals: Array<any>,
}

class ListComponent extends React.PureComponent<Props> {
  render() {
    const { goals } = this.props
    return (
      <Fragment>
        {goals &&
          goals.map(goal => <GoalComponent key={goal.id} goal={goal} />)}
      </Fragment>
    )
  }
}

export default ListComponent
