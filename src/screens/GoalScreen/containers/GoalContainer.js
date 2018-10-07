import { connect } from 'react-redux'
import GoalComponent from '../components/GoalComponent'
import type { GoalStepComponentProps } from '../components/GoalComponent'
import type { Goal } from '../types'
import tron from 'reactotron-react-native'

type DispatchToProps = {
  onPress: () => any
}

type GoalContainerProps = {
  goal: Goal
}

const dummyData = [
  {
    id: '1',
    title: 'Spend less money on stupid things',
    completed: false
  },
  {
    id: '2',
    title: 'Some Random step',
    completed: true
  }
]

const mapDispatchToProps = (): DispatchToProps => {
  return {
    onPress: () => tron.log('hiahaiahia')
  }
}

const mergeProps = (
  _,
  dispatchProps: DispatchToProps,
  ownProps: GoalContainerProps
): GoalStepComponentProps => {
  const { goal } = ownProps
  const { onPress } = dispatchProps
  return {
    goal,
    onPress,
    steps: dummyData
  }
}

export default connect(null, mapDispatchToProps, mergeProps)(GoalComponent)
