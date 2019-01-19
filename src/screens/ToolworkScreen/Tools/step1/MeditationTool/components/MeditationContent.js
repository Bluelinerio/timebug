import React               from 'react'
import { View, Text }      from 'react-native'
import MeditationTimerIcon from './../containers/MeditationTimerIconContainer'
import styles              from '../styles'

type Props = {
  remaining: Array<number>,
}

class MeditationContent extends React.PureComponent<Props> {
  render() {
    const { remaining, ...rest } = this.props
    return (
      <View style={[styles.container, styles.iconArea]}>
        <View style={[styles.container, styles.iconRow]}>
          <MeditationTimerIcon {...rest} />
        </View>
        <View style={[styles.container, styles.trackLengthContainer]}>
          <Text style={[styles.text, styles.trackLength]}>{`${remaining[0]}:${
            remaining[1]
          }`}</Text>
        </View>
      </View>
    )
  }
}

export default MeditationContent
