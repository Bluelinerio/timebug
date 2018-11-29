import { connect } from 'react-redux';
import { loginWithFbButtonPressed } from '../redux/actions';
import LoginWithFbButton, {
  Props as LoginButtonComponentProps,
} from '../components/LoginWithFbButton';

type LoginButtonProps = {
  onPress: any => void,
};

const mapDispatchToProps = (dispatch: any) => ({
  login: () => dispatch(loginWithFbButtonPressed()),
});

const mergeProps = (
  _,
  dispatchProps: { login: () => void },
  ownProps: LoginButtonProps
): LoginButtonComponentProps => {
  const { login } = dispatchProps;
  const { onPress } = ownProps;
  return {
    onPress: () => {
      login();
      onPress();
    },
  };
};

export default connect(null, mapDispatchToProps, mergeProps)(LoginWithFbButton);
