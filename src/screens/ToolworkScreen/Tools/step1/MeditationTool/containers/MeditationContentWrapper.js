import { compose, mapProps } from 'recompose'
import { minutesAndSeconds } from '2020_utils/timerHelpers'
import TimerHOC              from '../HOC/TimerHOC'
import MeditationContent     from '../components/MeditationContent'

type Props = {
  timeLeft: number,
  timerStatus: string,
  toggleTimer: () => any,
}

const merge = (props: Props) => {
  const { timeLeft, timerStatus, toggleTimer } = props

  const remaining = minutesAndSeconds(timeLeft)
  const onPress = () => toggleTimer()

  return {
    ...props,
    onPress,
    remaining,
    timerStatus,
  }
}

export default compose(TimerHOC, mapProps(merge))(MeditationContent)
