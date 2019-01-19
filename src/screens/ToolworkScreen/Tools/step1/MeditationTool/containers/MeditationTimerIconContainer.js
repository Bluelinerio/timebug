import { Platform }          from 'react-native'
import { compose, mapProps } from 'recompose'
import { TIMER_STATUS }      from '../HOC/TimerHOC'
import MeditationTimerIcon   from '../components/MeditationTimerIcon'

const icons = {
  [TIMER_STATUS.PLAYING]: 'ios-pause',
  [TIMER_STATUS.PAUSED]: 'ios-play',
  [TIMER_STATUS.FINISHED]: 'ios-play',
}

const styles = {
  [TIMER_STATUS.PLAYING]: {
    ...Platform.select({
      android: {
        paddingLeft: 0,
      },
      ios: {},
    }),
  },
  [TIMER_STATUS.PAUSED]: {},
  [TIMER_STATUS.FINISHED]: {},
}

type Props = {
  onPress: () => any,
  timerStatus: string,
}

const merge = (props: Props) => {
  const { timerStatus, onPress } = props
  const style = styles[timerStatus]
  const icon = icons[timerStatus]
  return {
    onPress,
    style,
    icon,
  }
}

export default compose(mapProps(merge))(MeditationTimerIcon)
