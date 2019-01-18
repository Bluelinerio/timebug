import React                 from 'react'
import { View, Text }        from 'react-native'
import styles                from '../styles'
import MeditationTimerIcon   from './MeditationTimerIcon'
import DefaultIndicator      from '../../../../components/DefaultIndicator'
import { minutesAndSeconds } from '../../../../utils/timerHelpers'

export type Props = {
  color: string,
  icon: string,
  handle: () => any,
  totalLength: number,
  currentPosition: number,
  isPending: boolean,
  errored: boolean,
  style: any,
}

class MeditationTimer extends React.PureComponent<Props> {
  _onPress = () => {
    const { handle } = this.props
    handle()
  }

  render() {
    const {
      color,
      icon,
      totalLength,
      currentPosition,
      isPending,
      errored,
      style = {},
    } = this.props
    const remaining = minutesAndSeconds(totalLength - currentPosition)

    return (
      <View style={[styles.container, styles.iconArea]}>
        {isPending ? (
          <DefaultIndicator container={false} color={color} />
        ) : (
          <React.Fragment>
            <View style={[styles.container, styles.iconRow]}>
              <MeditationTimerIcon
                color={color}
                icon={icon}
                onPress={this._onPress}
                style={style}
              />
            </View>
            <View style={[styles.container, styles.trackLengthContainer]}>
              {!errored && (
                <Text style={[styles.text, styles.trackLength, { color }]}>{`${
                  remaining[0]
                }:${remaining[1]}`}</Text>
              )}
            </View>
          </React.Fragment>
        )}
      </View>
    )
  }
}

export default MeditationTimer
