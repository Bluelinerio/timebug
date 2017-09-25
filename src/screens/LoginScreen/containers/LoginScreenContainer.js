// @flow

import React from 'react';
import { connect } from 'react-redux';
import DefaultIndicator from "../../../components/DefaultIndicator";
import { getAboutInfoFromCMS } from "../../../actions/login";
import { ILogin } from "../../../interfaces"
import LoginScreen from '../components/LoginScreen';
import FBAction from '../../../actions/FBAction'
import theme from 'react-native-theme';

type Props = {
	getAboutInfoFromCMS(): any,
	about: ILogin,
	navigation: {
		navigate(): any
	}
};

type State = {}

const mapStateToProps = (state) => {
	return {
		about: state.login
	}
};

@connect(mapStateToProps, {
	getAboutInfoFromCMS,
	FBAction
})

class LoginScreenContainer extends React.Component<Props, State> {
	static navigationOptions = {
		header: false
	};
	
	componentDidMount() {
		this.props.getAboutInfoFromCMS();
	}

  componentWillMount() {
    theme.setRoot(this)
  }

	render () {
		if (this.props.about) {
			return (
				<LoginScreen
					about={this.props.about}
					navigate={this.props.navigation.navigate}
					fbLogin={this.props.FBAction}
				/>
			)
		} else {
			return <DefaultIndicator size="large"/>
		}
		
		
	}
}

export default LoginScreenContainer
