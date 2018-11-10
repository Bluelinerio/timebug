// @flow
import React from 'react'
import GoalList from './GoalList'
import GoalsFromTypeList from '../containers/GoalsFromTypeListContainer'
import GoalReview from '../containers/GoalReviewContainer'

type Props = {
  onSelectGoal: () => any,
  onSelectGoalType: () => any,
  unsetGoal: () => any,
  selectedGoaltype: string,
  selectedGoal: any
}

class GoalScreenContent extends React.PureComponent<Props> {
  render() {
    const { selectedGoaltype, selectedGoal } = this.props
    return (
      <React.Fragment>
        {!selectedGoaltype &&
          !selectedGoal && <GoalList onSelect={this.props.onSelectGoalType} />}
        {selectedGoaltype &&
          !selectedGoal && (
            <GoalsFromTypeList
              goal={selectedGoaltype}
              onSelect={this.props.onSelectGoal}
            />
          )}
        {selectedGoaltype &&
          selectedGoal && (
            <GoalReview
              goal={selectedGoal}
              type={selectedGoaltype}
              unsetGoal={this.props.unsetGoal}
            />
          )}
      </React.Fragment>
    )
  }
}

export default GoalScreenContent
