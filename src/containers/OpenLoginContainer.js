import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { loginWithFbButtonPressed } from '../redux/actions';

type OpenLoginProps = {
  openLogin: () => any,
  children: React.Node,
};

const mapDispatchToProps = dispatch => ({
  openLogin: () => dispatch(loginWithFbButtonPressed()),
});

const OpenLoginContainer = ({
  openLogin,
  children,
}: OpenLoginProps) => {
  return <TouchableOpacity onPress={openLogin}>{children}</TouchableOpacity>;
};

export default connect(null, mapDispatchToProps)(OpenLoginContainer);
