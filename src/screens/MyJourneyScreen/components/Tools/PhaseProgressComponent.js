//@flow
import React                                        from 'react'
import { View, Text, TouchableOpacity }             from 'react-native'
import { iconColor, phaseProgressStyles as styles } from '../../styles'
import Icon                                         from 'react-native-vector-icons/dist/Ionicons'

export type PhaseProgressComponentProps = {
  phase: string,
  phaseNumber: number,
  complete: number,
  incomplete: number,
  fill: string,
  onPhasePress: () => any,
  unfilledColor: string,
  phaseColor: string,
  isSelected: boolean,
  amountOfToolsForPhase: number,
  unlockedToolsForPhase: number,
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
      boolean,
      isSelected,
      amountOfToolsForPhase,
      unlockedToolsForPhase
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
            {!!unlockedToolsForPhase && unlockedToolsForPhase > 0
              ? `${unlockedToolsForPhase} out of ${amountOfToolsForPhase}`
              : `${amountOfToolsForPhase} tools`}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default PhaseProgressComponent
