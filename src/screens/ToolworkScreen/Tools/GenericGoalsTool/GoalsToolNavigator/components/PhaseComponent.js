// @flow
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

type Props = {
  phase: string,
  onPress: () => void,
  textStyle: any,
  containerStyle: any,
  goalCount: number,
}

class PhaseComponent extends React.PureComponent<Props> {
  render() {
    const { phase, textStyle, containerStyle, onPress, goalCount } = this.props
    return (
      <TouchableOpacity
        style={[styles.phaseComponent, containerStyle]}
        onPress={onPress}
      >
        <Text style={[styles.phaseText, textStyle]}>{phase}</Text>
        <Text style={[styles.goalNumber, textStyle]}>({goalCount})</Text>
      </TouchableOpacity>
    )
  }
}

export default PhaseComponent
