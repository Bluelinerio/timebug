import React         from 'react'
import { View, Text } from 'react-native'
import tron          from 'reactotron-react-native'
import { hashCode }  from '../../../utils/hash'
import GoalComponent from '../containers/GoalContainer'
import styles from '../styles'

type GoalListComponentProps = {
  data: any,
  step: any
}

class GoalListComponent extends React.PureComponent<GoalListComponentProps> {
  render() {
    tron.log(this.props)
    const { data } = this.props
    return (
      <View style={styles.goalListContainer}>
        <View style={styles.goalListHeader}>
          <Text style={[styles.goalListTitle, styles.text]}>
            Your list of goals
          </Text>
          <Text style={[styles.goalListTooltip, styles.text, styles.justifiedText]}>
            Press a goal to build your own list of steps to complete your goals!
          </Text>
        </View>
        {data &&
          data.recentGoals.map((goal, index) => (
            <React.Fragment key={hashCode(JSON.stringify(goal))}>
              <GoalComponent goal={goal} goalIndex={index} />
            </React.Fragment>
          ))}
      </View>
    )
  }
}

export default GoalListComponent
