import Button from '../../../components/Button';
import type { Props } from '../../../components/Button'
import { connect } from 'react-redux';
import selectors from '../../../redux/selectors';
import { goToWorkBookScreen } from '../../../redux/actions/nav.actions';
import { loginWithFbButtonPressed } from '../../../redux/actions'

const mapStateToProps = state => {
  const steps = selectors.steps(state);
  const colors = selectors.stepColors(state);
  const needsLogin = selectors.isAnonymous(state)
  return {
    steps,
    colors,
    needsLogin
  }
}

const textTestId= 'step_to_workbook_text'
const buttonTestId= 'step_to_workbook_button'

const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, steps, needsLogin } = stateProps
  const { number } = ownProps
  const backgroundColor = colors[number]
  const text = needsLogin? 'Login with Facebook to start' : 'BEGIN';
  const { loginWithFbButtonPressed, goToWorkBookScreen } = dispatchProps;
  const onPressWithProps = needsLogin ? loginWithFbButtonPressed : goToWorkBookScreen
  return {
    ...ownProps,
    onPressWithProps,
    textTestId,
    buttonTestId,
		text,
    backgroundColor
  }
}

export default connect(mapStateToProps,({ goToWorkBookScreen, loginWithFbButtonPressed}), merge)(Button);
