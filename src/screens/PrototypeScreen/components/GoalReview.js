import React from 'react'
import { View, Text } from 'react-native'
import Slider from 'react-native-slider'
import styles, { minimumTrackColor, maximumTrackColor } from '../styles'
import tron from 'reactotron-react-native'
import { translateFrequencies } from '../forms/goals'
import GoalSubstep from './GoalSubstep'

type Props = {
  goal: any,
  type: string
}

class GoalReview extends React.PureComponent<Props> {
  render() {
    tron.log(this.props)
    const { goal, type } = this.props
    const steps = goal['5'].value
    return (
      <React.Fragment>
        <View style={styles.titleContainer}>
          <Text style={styles.goalScreenTitle}>GOALS</Text>
          <Text style={styles.goalScreenSubtitle}>{type}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.goalReviewTextWithMargin}>
            <Text style={styles.goalScreenSubtitle}>{goal['1'].value}</Text>
          </View>
          <View style={[styles.goalReviewIndent]}>
            <Text style={styles.goalScreenContent}>
              Checkin: {translateFrequencies(goal['4'].value)}
            </Text>
          </View>
          <View style={[styles.goalReviewTextBlock, styles.goalReviewIndent]}>
            <Text style={styles.goalScreenContent}>ETA: {goal['3'].value}</Text>
          </View>
          <View style={styles.goalReviewTextBlock}>
            <Text style={styles.goalScreenContent}>Progress</Text>
            <View style={styles.goalReviewIndent}>
              <Text style={styles.goalScreenContent}>Month #1: 100%</Text>
            </View>
            <View style={styles.goalReviewIndent}>
              <Text style={styles.goalScreenContent}>Month #2: 33%</Text>
            </View>
          </View>
          <View style={styles.goalReviewTextBlock}>
            <View style={[styles.totalProgress]}>
              <Text style={styles.goalScreenContent}>Total: 22%</Text>
              <Slider
                maximumValue={100}
                minimumValue={0}
                step={1}
                minimumTrackTintColor={minimumTrackColor}
                maximumTrackTintColor={maximumTrackColor}
                value={22}
                disabled
                thumbStyle={{
                  width: 0,
                  height: 0,
                  backgroundColor: 'transparent'
                }}
              />
            </View>
          </View>
          <View style={styles.goalReviewTextBlock}>
            {steps &&
              steps.map((step) => (
                <GoalSubstep key={step._id} step={step} onPress={() => tron.log('hey')} />
              ))}
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default GoalReview
