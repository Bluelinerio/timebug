import { compose }          from 'recompose'
import GoalElementHOC       from './GoalElementHOC'
import CompletedGoalElement from '../components/CompletedGoalElement'

export default compose(GoalElementHOC)(CompletedGoalElement)
