// @flow
import React                                            from 'react'
import { View, Text }                                   from 'react-native'
import BackHeader                                       from './BackHeader'
import type { Goal }                                    from '../types'
import styles, { minimumTrackColor, maximumTrackColor } from '../styles'
import Slider                                           from 'react-native-slider'
import ReopenGoalButton                                 from '../containers/ReopenGoalButtonContainer'
import tron                                             from 'reactotron-react-native'

type Props = {
  goal: Goal,
  onBack: () => null,
}

class GoalDetailsScreen extends React.PureComponent<Props> {
  _parseCompletion = rawCompletion => {
    const [completion] = rawCompletion.split('%')
    try {
      return completion > 100
        ? 100
        : parseInt(completion) < 0 ? 0 : parseInt(completion)
    } catch (err) {
      return 0
    }
  }

  render() {
    const { goal = {}, onBack } = this.props
    tron.log(goal)
    const { type, outcome, effort, completion: rawCompletion } = goal
    const completion = this._parseCompletion(rawCompletion)
    return (
      <React.Fragment>
        <BackHeader onBack={onBack} />
        <View style={[styles.container, styles.goalDetailsContainer]}>
          <View style={styles.goalDetailsTitleContainer}>
            <Text style={styles.goalDetailsTitle}>Goal: {goal.name}</Text>
          </View>
          <View style={styles.subDataContainer}>
            <Text style={styles.subData}>Type: {type}</Text>
            <Text style={styles.subData}>Outcome: {outcome}</Text>
            <Text style={styles.subData}>
              Effort and time invested: {effort}
            </Text>
          </View>
          <View style={styles.completionTitleContainer}>
            <Text style={styles.completionLabel}>
              Completion: {completion}%
            </Text>
          </View>
          <View style={styles.sliderContainer}>
            <Slider
              maximumValue={100}
              minimumValue={0}
              step={1}
              minimumTrackTintColor={minimumTrackColor}
              maximumTrackTintColor={maximumTrackColor}
              value={completion}
              disabled
              thumbStyle={{
                width: 0,
                height: 0,
                backgroundColor: 'transparent',
              }}
            />
          </View>
          {completion !== 100 && (
            <View style={styles.reopenButtonContainer}>
              <ReopenGoalButton goal={goal} />
            </View>
          )}
        </View>
      </React.Fragment>
    )
  }
}

export default GoalDetailsScreen
