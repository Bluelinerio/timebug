// @flow
import React          from 'react'
import { View, Text } from 'react-native'
import styles         from '../styles'
import GoalElement    from '../containers/GoalElementContainer'
import { GoalType }   from '../../../forms/custom/forms/goals'

type Props = {
  onSelect: String => any
}

class GoalList extends React.PureComponent<Props> {
  render() {
    return (
      <React.Fragment>
        <View style={styles.titleContainer}>
          <Text style={styles.goalScreenTitle}>GOALS</Text>
        </View>
        <View style={styles.container}>
          {Object.values(GoalType).map(goal => (
            <GoalElement key={goal} goal={goal} {...this.props} />
          ))}
        </View>
      </React.Fragment>
    )
  }
}

export default GoalList
