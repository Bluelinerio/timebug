import { connect }           from 'react-redux'
import { mapProps, compose } from 'recompose'
import MeditationTimer       from '../components/MeditationTimer'

const mapDispatchToProps = (dispatch: any) => ({
  unlockAchievement: () => dispatch({ type: 'TODO_ACHIEVEMENT' }),
})

type Props = {
  onTimerFinish: () => any,
  daysInRowCount: number,
}

const merge = (props: Props) => {
  const { daysInRowCount, onTimerFinish } = props
  const multiplier = Math.floor(daysInRowCount / 5) + 1
  const total = 300 * multiplier

  const onMeditationFinish = () => {
    onTimerFinish()
  }

  return {
    total,
    onMeditationFinish,
  }
}

export default compose(connect(null, mapDispatchToProps), mapProps(merge))(
  MeditationTimer
)
