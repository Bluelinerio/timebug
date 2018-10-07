import { connect }   from 'react-redux'
import GoalComponent from '../components/GoalComponent'
import type { Goal } from '../types'
import tron          from 'reactotron-react-native'

type DispatchToProps = {
  onPress: () => any
}

type GoalContainerProps = {
  goal: Goal
}

const mapDispatchToProps = (): DispatchToProps => {
  return {
    onPress: () => tron.log('hiahaiahia')
  }
}

const mergeProps = (
  _,
  dispatchProps: DispatchToProps,
  ownProps: GoalContainerProps
) => {
  const { goal } = ownProps
  const { onPress } = dispatchProps
  return {
    goal,
    onPress
  }
}

export default connect(null, mapDispatchToProps, mergeProps)(GoalComponent)
