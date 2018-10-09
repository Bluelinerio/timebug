import { connect }                     from 'react-redux'
import GoalComponent                   from '../components/GoalComponent'
import type { GoalStepComponentProps } from '../components/GoalComponent'
import type { Goal }                   from '../types'
import { goToGoalStepScreen }          from '../../../redux/actions/nav.actions'

type DispatchToProps = {
  onPress: () => any
}

type GoalContainerProps = {
  goal: Goal,
  goalIndex: number
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

const mapDispatchToProps = (dispatch: any): DispatchToProps => {
  return {
    onPress: (id: string, goal: Goal) =>
      dispatch(
        goToGoalStepScreen({
          goalId: id,
          goalTitle: goal.goal,
          goalType: goal.goalTypes
        })
      )
  }
}

const mergeProps = (
  _,
  dispatchProps: DispatchToProps,
  ownProps: GoalContainerProps
): GoalStepComponentProps => {
  const { goal, goalIndex } = ownProps
  const { onPress } = dispatchProps
  return {
    goal,
    goalIndex,
    onPress,
    steps: dummyData
  }
}

export default connect(null, mapDispatchToProps, mergeProps)(GoalComponent)
