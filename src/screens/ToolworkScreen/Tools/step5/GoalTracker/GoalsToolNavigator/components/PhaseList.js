// @flow
import React from 'react'
import { View } from 'react-native'
import { MEDITATION, SELF_ASSESSMENT, VISION_CREATION } from '2020_services/cms'
import PhaseComponent from '../containers/PhaseContainer'
import styles from '../styles'

const Phases = [MEDITATION, SELF_ASSESSMENT, VISION_CREATION]

type Props = {
  style: any,
}

class PhaseList extends React.PureComponent<Props> {
  render() {
    const { style, ...rest } = this.props
    return (
      <View style={[styles.phaseList, style]}>
        {Phases.map(p => <PhaseComponent {...rest} key={p} phase={p} />)}
      </View>
    )
  }
}

export default PhaseList
