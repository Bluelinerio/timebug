import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import selectors from '../../../redux/selectors'
import GoalScreenContent from '../components/GoalScreenContent'

//TODO: Eventually do this well
// const screen = 'GoalPrototypeScreen'
// const step = '5'

// const mapStateToProps = (state: any) => {
//   const screenData = selectors.stateForScreen(state)(screen)
//   return {
//     data: screenData[step]
//   }
// }

// export default compose(connect(mapStateToProps), withNavigation)(
//   GoalScreenContent
// )

export default withNavigation(GoalScreenContent)