import { compose }           from 'recompose'
import GoalElementHOC        from './GoalElementHOC'
import BackloggedGoalElement from '../components/BackloggedGoalElement'

export default compose(GoalElementHOC)(BackloggedGoalElement)
