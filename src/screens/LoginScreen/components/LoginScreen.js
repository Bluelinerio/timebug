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
import Markdown from 'react-native-easy-markdown';
import { ILogin } from "../../../interfaces";

type Props = {
	about: ILogin,
	navigate(): any
}

type State = {

}

const window = Dimensions.get('window');
export default class LoginScreen extends React.Component<Props, State> {
	state = {
		modalVisible: false
	};
	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}
	
	render() {
		let {about} = this.props.about.about;
		return (
			<View style={styles.screen}>
				<View style={styles.container}>
					<Button containerStyle={styles.wideButton}
									testID="login_button"
									onPress={() => {this.props.navigate('HomeScreen')}}>
						<Text style={styles.wideButtonText}>Login with FB</Text>
					</Button>
				</View>
				<View style={styles.container2}>
					<TouchableHighlight onPress={() => {
						this.setModalVisible(true)
					}}>
						<Text style={styles.wideButtonText}>About</Text>
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
								<Text style={styles.close}>X</Text>
							</TouchableHighlight>
							<ScrollView
								style={styles.description}
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

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	container: {
		flex: 1,
		backgroundColor: '#3B7288',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	container2: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 10
	},
	wideButton: {
		flex: -1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		bottom: 10,
		borderWidth: 0,
		backgroundColor: '#ffffff',
		minWidth: 150,
		paddingHorizontal: 45,
		borderRadius: 150,
	},
	wideButtonText: {
		color: '#000000',
		fontSize: 14,
		fontWeight: '400',
		textAlign: 'center',
	},
	description: {
		flex: 1,
		paddingBottom: 500,
		paddingHorizontal: 20
	},
	about_text: {
		textAlign: 'center',
		paddingHorizontal: 20,
		alignSelf: 'center',
		fontSize: 18,
		marginBottom: 15,
		flexWrap: 'wrap',
		flexDirection: 'row'
	},
	close: {
		fontWeight: 'bold',
		fontSize: 15,
		marginBottom: 10,
		marginLeft: 10,
		marginTop: 7
	}
});
