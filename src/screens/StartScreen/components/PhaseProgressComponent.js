import React from 'react'
import { View, Text, ProgressBarAndroid, ProgressViewIOS, Platform } from 'react-native'
import { phaseProgressStyles as styles } from '../styles'

export type PhaseProgressComponentProps = {
  phase: string,
  phaseNumber: number,
  complete: number,
  incomplete: number,
  fill: string,
  bar: string,
  phaseColor: string
}

class PhaseProgressComponent extends React.PureComponent<
  PhaseProgressComponentProps
> {
  render() {
    const { phase, phaseNumber, complete, incomplete, fill, bar, phaseColor } = this.props
    return (
      <View style={[styles.phaseContainer, { backgroundColor: phaseColor }]}>
        <View style={styles.mainArea}>
          <Text style={styles.phaseNumber}>{`Phase ${phaseNumber}:`}</Text>
          <Text style={styles.phaseText}>{`${phase}`}</Text>
        </View>
        <View style={styles.secondaryArea}>
            <Text style={styles.phaseProportion}>
                {
                    complete && complete > 0 
                        ? `${complete} out of ${complete + incomplete}`
                        : `${complete + incomplete} steps`
                }
            </Text>
            <View>
                {/* {
                    Platform.OS === 'ios'
                        ? <ProgressViewIOS progress={complete / (incomplete + complete)} progressTintColor={fill} style={styles.progressIOS} progressViewStyle={'bar'} />
                        : <ProgressBarAndroid styleAttr={'Horizontal'} progress={complete / (incomplete + complete)} color={fill} style={styles.progressAndroid} />
                } */}
            </View>
        </View>
      </View>
    )
  }
}

export default PhaseProgressComponent
