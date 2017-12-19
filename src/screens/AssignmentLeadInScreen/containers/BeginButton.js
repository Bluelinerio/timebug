import Button from '../../../components/Button';
import { connect } from 'react-redux';
import selectors from '../../../redux/selectors';
import { goToWorkBookScreen as onPressWithProps } from '../../../redux/actions/nav.actions';

const mapStateToProps = state => {
	const backgroundColor = selectors.currentStepColor(state)
	const step = selectors.currentStep(state)
	return {
		step,
		backgroundColor,
		text:'BEGIN'
	}
}

export default connect(mapStateToProps,({onPressWithProps}))(Button);
