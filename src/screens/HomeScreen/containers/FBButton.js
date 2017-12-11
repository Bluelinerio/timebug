// @flow
import React from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import styles from '../styles/loginButton.styles'
import { loginWithFbButtonPressed } from '../../../redux/actions'
import LoginButtonStyles from '../../../styles/components/LoginButton'

const FBButton = ({ loginWithFbButtonPressed, ...rest }) => (
	<Button
		textTestId={'login_text'}
		buttonTestId={'login_button'}
		text={'LOGIN WITH FACEBOOK'}
		styles={styles}
		onPress={() => {
			debugger;
			loginWithFbButtonPressed();
		}}
		{...rest}
	/>
)

export default connect(null, ({loginWithFbButtonPressed}) )(FBButton)
