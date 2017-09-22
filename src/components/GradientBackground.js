import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
	count: ReactElement,
	colorTop: ReactElement,
	colorBottom: ReactElement
}

type State = {
	count: number,
	colorTop: string,
	colorBottom: string
}


function incrementColor(color, step) {
	const intColor = parseInt(color.substr(1), 16);
	const newIntColor = (intColor + step).toString(16);
	return `#${'0'.repeat(6 - newIntColor.length)}${newIntColor}`;
}

export default class GradientBackground extends Component<Props, State>{
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			colorTop: '#79bddd',
			colorBottom: '#ffffff'
		}
	}
	
	componentDidMount() {
		this.setState({
			count: this.state.count + 1,
			colorTop: incrementColor(this.state.colorTop, 1),
			colorBottom: incrementColor(this.state.colorBottom, -1),
		});
	}
	
	render() {
		return (
			<View style={styles.container}>
				<LinearGradient
					colors={[this.state.colorTop, this.state.colorBottom]}
					style={styles.gradient} />
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		height: 200,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		borderWidth: 0,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#79bddd',
	},
	gradient: {
		height: 200,
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'stretch'
	},
});