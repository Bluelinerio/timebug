// @flow
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

type Props = {
  phase: string,
  onPress: () => void,
  textStyle: any,
  containerStyle: any,
}

class PhaseComponent extends React.PureComponent<Props> {
  render() {
    const { phase, textStyle, containerStyle, onPress } = this.props
    return (
      <TouchableOpacity
        style={[styles.phaseComponent, containerStyle]}
        onPress={onPress}
      >
        <Text style={[styles.phaseText, textStyle]}>{phase}</Text>
      </TouchableOpacity>
    )
  }
}

export default PhaseComponent
