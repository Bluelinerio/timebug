//@flow
import React                             from 'react'
import { View, Text, TouchableOpacity }  from 'react-native'
import { phaseProgressStyles as styles } from '../styles'
import ProgressBar                       from 'react-native-progress/Bar'

const DISABLE_PROGRESS = false

export type PhaseProgressComponentProps = {
  phase: string,
  phaseNumber: number,
  complete: number,
  incomplete: number,
  fill: string,
  onPhasePress: () => any,
  unfilledColor: string,
  phaseColor: string,
}

class PhaseProgressComponent extends React.PureComponent<
  PhaseProgressComponentProps
> {
  render() {
    const {
      phase,
      phaseNumber,
      complete,
      incomplete,
      onPhasePress,
      fill,
      unfilledColor,
      phaseColor,
    } = this.props
    return (
      <TouchableOpacity
        style={[styles.phaseContainer, { backgroundColor: phaseColor }]}
        onPress={onPhasePress}
      >
        <View style={styles.mainArea}>
          <Text
            style={[styles.phaseNumber, styles.strong]}
          >{`Phase ${phaseNumber}:`}</Text>
          <Text style={[styles.phaseText, styles.strong]}>{`${phase}`}</Text>
        </View>
        <View style={styles.secondaryArea}>
          <Text style={styles.phaseProportion}>
            {!!complete && complete > 0
              ? `${complete} out of ${complete + incomplete}`
              : `${complete + incomplete} steps`}
          </Text>
          <View>
            {!!complete &&
              complete > 0 &&
              !DISABLE_PROGRESS && (
                <ProgressBar
                  progress={complete / (incomplete + complete)}
                  color={fill}
                  unfilledColor={unfilledColor}
                  width={null}
                  borderColor={'transparent'}
                />
              )}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default PhaseProgressComponent
