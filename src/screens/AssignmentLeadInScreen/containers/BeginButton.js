import Button from '../../../components/Button';
import { connect } from 'react-redux';
import selectors from '../../../redux/selectors';
import { goToWorkBookScreen } from '../../../redux/actions/nav.actions';

const mapStateToProps = state => {
	const backgroundColor = selectors.currentStepColor(state)
	return {
		backgroundColor,
		text:"BEGIN"
	}
}
const mapDispatchToProps = dispatch => {
  return {
    onPress: () => {
      dispatch(goToWorkBookScreen())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Button);
