import * as React from 'react';
import { connect } from 'react-redux';
import { loginWithFbButtonPressed } from '../redux/actions';
import LoginWithFbButton from '../components/LoginWithFbButton';

export default connect(null, { onPress: loginWithFbButtonPressed })(
  LoginWithFbButton
);
