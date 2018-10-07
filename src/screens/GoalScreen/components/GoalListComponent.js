import React         from 'react'
import { View }      from 'react-native'
import tron          from 'reactotron-react-native'
import { hashCode }  from '../../../utils/hash'
import GoalComponent from '../containers/GoalContainer'

type GoalListComponentProps = {
  data: any
}

class GoalListComponent extends React.PureComponent<GoalListComponentProps> {
  render() {
    tron.log(this.props)
    const { data } = this.props
    return (
      <View>
        {data &&
          data.recentGoals.map(goal => (
            <React.Fragment key={hashCode(JSON.stringify(goal))}>
              <GoalComponent goal={goal} />
            </React.Fragment>
          ))}
      </View>
    )
  }
}

export default GoalListComponent
