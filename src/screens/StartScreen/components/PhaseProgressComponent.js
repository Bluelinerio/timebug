import React                             from 'react'
import { View, Text }                    from 'react-native'
import { phaseProgressStyles as styles } from '../styles'
import ProgressBar                       from 'react-native-progress/Bar'

export type PhaseProgressComponentProps = {
  phase: string,
  phaseNumber: number,
  complete: number,
  incomplete: number,
  fill: string,
  unfilledColor: string,
  phaseColor: string
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
      fill,
      unfilledColor,
      phaseColor
    } = this.props
    return (
      <View style={[styles.phaseContainer, { backgroundColor: phaseColor }]}>
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
              complete > 0 && (
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
      </View>
    )
  }
}

export default PhaseProgressComponent
