// @flow
import React                     from 'react'
import CompletedGoalsList        from '../containers/CompletedGoalsListContainer'
import BackloggedGoalsList       from '../containers/BackloggedGoalsListContainer'
import CompletedGoalDetails      from '../containers/CompletedGoalDetailsContainer'
import BackloggedGoalDetails     from '../container/BackloggedGoalDetailsContainer'
import type { GoalWithToolData } from '../../common/types'
import { SECTIONS }              from '../constants'

type Props = {
  selectedSection: string,
  goals: any,
  setGoal: (goal: GoalWithToolData) => any,
  unsetGoal: () => any,
  selectedGoal: GoalWithToolData,
  data: any,
  tool: any,
  storeAwardData: any,
}

class ArchiveContent extends React.PureComponent<Props> {
  render() {
    const {
      selectedSection,
      goals,
      setGoal,
      unsetGoal,
      selectedGoal,
      data,
      tool,
      storeAwardData,
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
          <CompletedGoalDetails
            goal={selectedGoal}
            unsetGoal={unsetGoal}
            data={data}
            tool={tool}
            storeAwardData={storeAwardData}
          />
        ) : (
          <BackloggedGoalDetails
            goal={selectedGoal}
            unsetGoal={unsetGoal}
            data={data}
            tool={tool}
            storeAwardData={storeAwardData}
          />
        )}
      </React.Fragment>
    )
  }
}

export default ArchiveContent
