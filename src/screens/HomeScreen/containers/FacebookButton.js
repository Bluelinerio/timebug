// @flow
import React from 'react'
import Button from '../../../components/Button'
import styles from '../styles/loginButton.styles'
import { loginWithFbButtonPressed } from '../../../redux/actions'
import { connect } from 'react-redux'

const FBButton = ({ loginWithFbButtonPressed, ...rest }) => (
	<Button
		textTestId={'login_text'}
		buttonTestId={'login_button'}
		text={'LOGIN WITH FACEBOOK'}
		styles={styles}
		onPress={loginWithFbButtonPressed}
		{...rest}
	/>
)

export default connect(null, dispatch => ({
	loginWithFbButtonPressed: () => dispatch(loginWithFbButtonPressed)
}))(FBButton)
