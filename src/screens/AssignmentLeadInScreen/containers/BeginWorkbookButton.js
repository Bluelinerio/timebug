import Button from '../../../components/Button';
import type { Props } from '../../../components/Button'
import { connect } from 'react-redux';
import selectors from '../../../redux/selectors';
import { goToWorkBookScreen } from '../../../redux/actions/nav.actions';
import { loginWithFbButtonPressed } from '../../../redux/actions'
import { deepBlue } from '../../../constants/colors'
import loginButtonStyle from '../../../styles/components/Button/login';
import regularButtonStyle from '../../../styles/components/Button';

const mapStateToProps = state => {
  const steps = selectors.steps(state);
  const colors = selectors.stepColors(state);
  const needsLogin = selectors.isAnonymous(state)
  const authenticating = selectors.isUserStateAUTHENTICATING(state);
  return {
    steps,
    colors,
    needsLogin,
    authenticating
  }
}

const textTestId= 'step_to_workbook_text'
const buttonTestId= 'step_to_workbook_button'

const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, steps, needsLogin, authenticating } = stateProps
  const { number } = ownProps
  const backgroundColor = needsLogin? 'white' : colors[number]
  const text = needsLogin ? 'Login with Facebook to start' : authenticating? 'Loading...' : 'BEGIN';
  const { loginWithFbButtonPressed, goToWorkBookScreen } = dispatchProps;
  const onPressWithProps = needsLogin ? loginWithFbButtonPressed : goToWorkBookScreen
  const styles = needsLogin ? loginButtonStyle : null;
  const disabled = authenticating;
  return {
    ...ownProps,
    onPressWithProps,
    textTestId,
    buttonTestId,
		text,
    backgroundColor,
    styles,
  }
}

export default connect(mapStateToProps,({ goToWorkBookScreen, loginWithFbButtonPressed}), merge)(Button);
