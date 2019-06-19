//@flow
import React                             from 'react'
import { View, Text, TouchableOpacity }  from 'react-native'
import { iconColor, phaseProgressStyles as styles } from '../../styles'
import Icon                              from 'react-native-vector-icons/dist/Ionicons'
import ProgressBar                       from 'react-native-progress/Bar'

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
        {
          isSelected && 
            <View style={styles.secondaryArea}>
              <Icon name={'md-arrow-dropup'} color={iconColor} size={18} />
            </View>
        }
      </TouchableOpacity>
    )
  }
}

export default PhaseProgressComponent
