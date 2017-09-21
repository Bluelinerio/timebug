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
					<View style={{marginTop: 10}}>
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
									<Text style={styles.about_text}>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									</Text>
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
		justifyContent: 'flex-end'
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
		paddingBottom: 350
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
		fontSize: 20,
		marginBottom: 20,
		marginLeft: 20,
		marginTop: 20
	}
});
