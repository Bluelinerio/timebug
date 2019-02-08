// @flow
import React             from 'react'
import GoalTypeList      from './GoalTypeList'
import GoalsFromTypeList from '../containers/GoalsFromTypeListContainer'
import GoalReview        from '../containers/GoalReviewContainer'

type Props = {
  onSelectGoal: () => any,
  onSelectGoalType: () => any,
  unsetGoal: () => any,
  selectedGoaltype: string,
  selectedGoal: any,
  tool: { subtitle: string },
  storeAwardData: (any, any) => any,
  data: { value: boolean, _id?: string, date?: string },
}

class GoalScreenContent extends React.PureComponent<Props> {
  render() {
    const { selectedGoaltype, selectedGoal } = this.props
    return (
      <React.Fragment>
        {!selectedGoaltype &&
          !selectedGoal && (
            <GoalTypeList
              data={this.props.data}
              onSelect={this.props.onSelectGoalType}
            />
          )}
        {selectedGoaltype &&
          !selectedGoal && (
            <GoalsFromTypeList
              type={selectedGoaltype}
              data={this.props.data}
              onSelect={this.props.onSelectGoal}
            />
          )}
        {selectedGoaltype &&
          selectedGoal && (
            <GoalReview
              tool={this.props.tool}
              storeAwardData={this.props.storeAwardData}
              data={this.props.data}
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
