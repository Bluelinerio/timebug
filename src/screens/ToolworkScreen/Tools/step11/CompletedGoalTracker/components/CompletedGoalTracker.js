// @flow
import React             from 'react'
import { ScrollView }    from 'react-native'
import GoalsFromTypeList from '../containers/GoalsFromTypeListContainer'
import type { Goal }     from '../types'
import GoalDetailsScreen from '../containers/GoalDetailsScreenContainer'
import styles            from '../styles'

export type Props = {
  tool: { subtitle: string },
  storeAwardData: (any, any) => any,
  data: { value: boolean, _id?: string, date?: string },
  navigation: any,
}

type State = {
  goal: null | Goal,
}

class CompletedGoalTracker extends React.PureComponent<Props, State> {
  state = { goal: null }

  _selectGoal = (goal: Goal) => {
    this.setState({ goal })
  }

  _unsetGoal = () => {
    this.setState({ goal: null })
  }

  render() {
    const { goal } = this.state
    const { tool, data } = this.props
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView}
      >
        {!goal ? (
          <GoalsFromTypeList
            tool={tool}
            data={data}
            onSelect={this._selectGoal}
          />
        ) : (
          <GoalDetailsScreen goal={goal} onBack={this._unsetGoal} />
        )}
      </ScrollView>
    )
  }
}

export default CompletedGoalTracker
