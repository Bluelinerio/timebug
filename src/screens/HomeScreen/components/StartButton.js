import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { startButtonBackgroundImage }   from '../../../resources/images/';
import { darkishBlue } from '../../../constants/colors';

export default ({duration, onPress, buttonTestId, timeTestId}) => (
	<Button containerStyle={style.wideButton} onPress={onPress}>
		<View style={style.absoluteContainer}  testID={buttonTestId}>
			<Image source={startButtonBackgroundImage} style={style.startButtonBackground} />
			<Icon name="md-time" size={34} color={darkishBlue} style={style.buttonImage} />
			<Text style={[style.durationText]}>{duration}min</Text>
		</View>
		<Text style={style.wideButtonText} testID={timeTestId}>START</Text>
	</Button>
);

const style = {
	wideButton: {
		marginBottom: 40,
		backgroundColor: 'white',
		height: 44,
		minWidth: 240,
		paddingHorizontal: 10,
		borderRadius: 150,
		alignSelf: 'center',
		justifyContent: 'center',
		overflow: 'hidden'
	},
	wideButtonText: {
		fontFamily: 'Helvetica',
		fontSize: 15.5,
		fontWeight: 'bold',
		textAlign: 'left',
		color: darkishBlue,
		flex: 2,
		marginLeft: 15,
		backgroundColor: 'transparent'
	},
	absoluteContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	buttonImage: {
		bottom: -1
	},
	durationText: {
		color: darkishBlue,
		fontWeight: '600',
		fontSize: 12,
		bottom: 4,
		backgroundColor: 'transparent'
	},
	startButtonBackground: {
		position: 'absolute',
		top: 0
	}
};
