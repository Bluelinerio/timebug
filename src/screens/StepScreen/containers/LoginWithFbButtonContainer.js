import * as React from 'react'
import { connect } from 'react-redux';
import Button                       from '../../../components/Button';
import type { Props }               from '../../../components/Button'
import { loginWithFbButtonPressed } from '../../../redux/actions'
import loginButtonStyle             from '../../../styles/components/Button/login';

export default connect(
  null, 
  ({ onPressWithProps: loginWithFbButtonPressed }), 
  (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    backgroundColor:'white',
    text:'Login with Facebook to start',
    styles: loginButtonStyle
  })
)(Button)
