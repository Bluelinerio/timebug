// @flow
import React from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import styles from '../styles/loginButton.styles'
import { LOGIN_WITH_FB_BUTTON_PRESSED } from '../../../redux/actions'
import LoginButtonStyles from '../../../styles/components/LoginButton'

const FBButton = ({ LOGIN_WITH_FB_BUTTON_PRESSED, ...rest }) => (
	<Button
		textTestId={'login_text'}
		buttonTestId={'login_button'}
		text={'LOGIN WITH FACEBOOK'}
		styles={styles}
		onPress={LOGIN_WITH_FB_BUTTON_PRESSED}
		{...rest}
	/>
)

export default connect(null, dispatch => ({
	LOGIN_WITH_FB_BUTTON_PRESSED: () => dispatch(LOGIN_WITH_FB_BUTTON_PRESSED)
}))(FBButton)
