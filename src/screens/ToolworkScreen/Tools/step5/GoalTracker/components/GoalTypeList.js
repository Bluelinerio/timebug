// @flow
import React                        from 'react'
import { View, Text }               from 'react-native'
import { GoalType }                 from '2020_forms/forms/content'
import GoalCategoryElementContainer from '../containers/GoalCategoryElementContainer'
import styles                       from '../../common/styles'

type Props = {
  onSelect: String => any,
}

class GoalList extends React.PureComponent<Props> {
  render() {
    return (
      <React.Fragment>
        <View style={styles.titleContainer}>
          <Text style={styles.goalScreenTitle}>GOALS</Text>
        </View>
        <View style={styles.container}>
          {Object.values(GoalType).map(type => (
            <GoalCategoryElementContainer
              key={type}
              type={type}
              {...this.props}
            />
          ))}
        </View>
      </React.Fragment>
    )
  }
}

export default GoalList
