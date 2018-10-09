import GoalStepScreenComponent from '../components/GoalStepScreenComponent'
import { withNavigation } from 'react-navigation'
import { compose } from 'recompose'

export default compose(
  withNavigation
)(GoalStepScreenComponent)