import { connect }           from 'react-redux'
import { mapProps, compose } from 'recompose'
import MeditationTimer       from '../components/MeditationTimer'

const mapDispatchToProps = (dispatch: any) => ({
  unlockAchievement: () => dispatch({ type: 'TODO_ACHIEVEMENT' }),
})

type Props = {
  onTimerFinish: () => any,
  daysInRowCount: number,
  disableTimer: boolean,
}

const merge = (props: Props) => {
  const { daysInRowCount, onTimerFinish, disableTimer } = props
  const multiplier = Math.min(Math.floor(daysInRowCount / 5) + 1, 12)
  const total = 300 * multiplier

  const onMeditationFinish = () => {
    onTimerFinish()
  }

  return {
    total,
    onMeditationFinish,
    disableTimer,
  }
}

export default compose(connect(null, mapDispatchToProps), mapProps(merge))(
  MeditationTimer
)
