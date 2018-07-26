import { connect } from 'react-redux'
import selectors   from '../redux/selectors';

const mapStateToProps = state => {
  const modelsAndDataForExercise = selectors.modelsAndDataForExercise(state)
  return { modelsAndDataForExercise }
}

export default connect(mapStateToProps)