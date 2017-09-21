// @flow

import React from 'react';
import LoginScreen from '../components/LoginScreen';

type Props = {
	navigation: {
		navigate(): any
	}
};

type State = {}

class LoginScreenContainer extends React.Component<Props, State> {
	static navigationOptions = {
		header: false
	};
	
	render () {
		return (
			<LoginScreen
				navigate={this.props.navigation.navigate}
			/>
		)
	}
}

export default LoginScreenContainer
