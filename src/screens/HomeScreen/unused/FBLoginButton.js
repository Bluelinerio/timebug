// @flow
import React from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import styles from '../../../styles/components/Button'
import { loginWithFbButtonPressed } from '../../../redux/actions'

const FBLoginButton = ({ loginWithFbButtonPressed, ...rest }) => (
	<Button
		textTestId={'login_text'}
		buttonTestId={'login_button'}
		text={'LOGIN WITH FACEBOOK'}
		styles={styles}
		onPress={loginWithFbButtonPressed}
		{...rest}
	/>
)

export default connect(null, ({loginWithFbButtonPressed}) )(FBLoginButton)
