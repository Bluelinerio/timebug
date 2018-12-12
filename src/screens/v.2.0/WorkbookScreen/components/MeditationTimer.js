import React                 from 'react'
import { View, Text }        from 'react-native'
import styles                from '../styles'
import MeditationTimerIcon   from './MeditationTimerIcon'
import { minutesAndSeconds } from '../../../../utils/timerHelpers'

export type Props = {
  color: string,
  icon: string,
  handle: () => any,
  totalLength: number,
  currentPosition: number,
  isPending: boolean,
}

class MeditationTimer extends React.PureComponent<Props> {
  _onPress = () => {
    const { handle } = this.props
    handle()
  }

  render() {
    const { color, icon, totalLength, currentPosition, isPending } = this.props
    const remaining = minutesAndSeconds(totalLength - currentPosition)

    return (
      <View style={[styles.container, styles.iconArea]}>
        <View style={[styles.container, styles.iconRow]}>
          <MeditationTimerIcon
            color={color}
            icon={icon}
            onPress={this._onPress}
          />
        </View>
        <View style={[styles.container, styles.trackLengthContainer]}>
          {!isPending && (
            <Text style={[styles.text, styles.trackLength, { color }]}>{`${
              remaining[0]
            }:${remaining[1]}`}</Text>
          )}
        </View>
      </View>
    )
  }
}

export default MeditationTimer
