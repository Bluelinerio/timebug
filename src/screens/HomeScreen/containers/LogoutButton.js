// @flow
import React from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import styles from '../styles/loginButton.styles'
import { logoutButtonPressed } from '../../../redux/actions'
import LoginButtonStyles from '../../../styles/components/LoginButton'

const LogoutButton = ({ logoutButtonPressed, ...rest }) => (
	<Button
		textTestId={'logout_text'}
		buttonTestId={'logout_button'}
		text={'Log Out'}
		styles={styles}
		onPress={logoutButtonPressed}
		{...rest}
	/>
)

export default connect(null, {logoutButtonPressed})(LogoutButton);
