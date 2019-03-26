// @flow
import React                     from 'react'
import CompletedGoalsList        from '../containers/CompletedGoalsListContainer'
import BackloggedGoalsList       from '../containers/BackloggedGoalsListContainer'
import CompletedGoalDetails      from './CompletedGoalDetails'
import BackloggedGoalDetails     from './BackloggedGoalDetails'
import type { GoalWithToolData } from '../../common/types'
import { SECTIONS }              from '../constants'

type Props = {
  selectedSection: string,
  goals: any,
  setGoal: (goal: GoalWithToolData) => any,
  unsetGoal: () => any,
  selectedGoal: GoalWithToolData,
}

class ArchiveContent extends React.PureComponent<Props> {
  render() {
    const {
      selectedSection,
      goals,
      setGoal,
      unsetGoal,
      selectedGoal,
    } = this.props
    return (
      <React.Fragment>
        {!selectedGoal ? (
          selectedSection === SECTIONS.COMPLETED ? (
            <CompletedGoalsList goals={goals} setGoal={setGoal} />
          ) : (
            <BackloggedGoalsList goals={goals} setGoal={setGoal} />
          )
        ) : selectedSection === SECTIONS.COMPLETED ? (
          <CompletedGoalDetails goal={selectedGoal} unsetGoal={unsetGoal} />
        ) : (
          <BackloggedGoalDetails goal={selectedGoal} unsetGoal={unsetGoal} />
        )}
      </React.Fragment>
    )
  }
}

export default ArchiveContent
