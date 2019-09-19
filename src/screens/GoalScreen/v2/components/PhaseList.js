// @flow
import React from 'react'
import { View } from 'react-native'
import { Phases } from '../context/PhaseContext'
import PhaseComponent from '../containers/PhaseContainer'
import styles from '../styles'

type Props = {
  style: any,
  unlockedTools: Array<any>,
}

class PhaseList extends React.PureComponent<Props> {
  render() {
    const { style, unlockedTools } = this.props
    return (
      <View style={[styles.phaseList, style]}>
        {Phases.map(p => (
          <PhaseComponent key={p} unlockedTools={unlockedTools} phase={p} />
        ))}
      </View>
    )
  }
}

export default PhaseList
