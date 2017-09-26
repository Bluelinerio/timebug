// @flow

import React from 'react';
import {
	StyleSheet,
	Text,
	Dimensions,
	View,
	TouchableHighlight,
	ScrollView,
	Modal} from 'react-native';
import Button from 'react-native-button';
import autobind from 'autobind-decorator';
import Markdown from 'react-native-easy-markdown';
import { styles } from 'react-native-theme';

import { ILogin } from "../../../interfaces/index";


type Props = {
	about: string,
  loginWithFB(): any,
}

type State = {
  modalVisible: boolean
}

export default class IntroComponent extends React.Component<Props, State> {
	state = {
		modalVisible: false
	};
	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	@autobind
	onPressLogin() {
    this.props.loginWithFB()
	}
	
	render() {
		let {about} = this.props;
		return (
			<View style={styles.loginScreenScreen}>
				<View style={styles.loginScreenContainer}>
					<Button containerStyle={styles.loginScreenWideButton}
									testID="login_button"
									onPress={this.onPressLogin}>
						<Text style={styles.loginScreenWideButtonText}>Login with FB</Text>
					</Button>
				</View>
				<View style={styles.loginScreenContainer2}>
					<TouchableHighlight onPress={() => {
						this.setModalVisible(true)
					}}>
						<Text style={styles.loginScreenWideButtonText}>About</Text>
					</TouchableHighlight>
				</View>
				
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {alert("Modal has been closed.")}}
				>
					<View style={{marginTop: 30}}>
						<View>
							<TouchableHighlight onPress={() => {
								this.setModalVisible(!this.state.modalVisible)
							}}>
								<Text style={styles.loginScreenClose}>X</Text>
							</TouchableHighlight>
							<ScrollView
								style={styles.loginScreenDescription}
								testID="about_text"
							>
								<Markdown
									markdownStyles={{
										u: {},
										block: {
											alignSelf: 'center',
											marginBottom: 15,
											flexWrap: 'wrap',
											flexDirection: 'row'
										}
									}}>
									{about}
								</Markdown>
							</ScrollView>
						</View>
					</View>
				</Modal>
			</View>
		)
	}
}

