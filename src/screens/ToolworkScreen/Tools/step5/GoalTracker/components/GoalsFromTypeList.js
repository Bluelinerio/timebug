// @flow
import React          from 'react'
import { View, Text } from 'react-native'
import GoalElement    from '../containers/GoalElementContainer'
import styles         from '../../common/styles'

type Props = {
  onSelect: String => any,
  goals: any,
  type: string,
  titleKey: string,
}

class GoalsFromTypeList extends React.PureComponent<Props> {
  render() {
    const { type, goals, onSelect, titleKey } = this.props
    return (
      <React.Fragment>
        <View style={styles.titleContainer}>
          <Text style={styles.goalScreenTitle}>GOALS</Text>
          <Text style={styles.goalScreenSubtitle}>{type}</Text>
        </View>
        <View style={styles.container}>
          {Object.values(goals).map(goal => (
            <GoalElement
              key={goal[titleKey].value}
              title={goal[titleKey].value}
              goal={goal}
              onSelect={onSelect}
              type={type}
            />
          ))}
        </View>
      </React.Fragment>
    )
  }
}

export default GoalsFromTypeList
