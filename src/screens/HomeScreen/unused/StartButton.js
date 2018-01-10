import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { startButtonBackgroundImage }   from '../../../resources/images/';
import { deepBlue } from '../../../constants/colors';

export default ({ text, durationText, onPress, buttonTestId, timeTestId}) => (
	<Button containerStyle={style.wideButton} onPress={onPress}>
		<View style={style.absoluteContainer}  testID={buttonTestId}>
			<Image source={startButtonBackgroundImage} style={style.startButtonBackground} />
			<Icon name="md-time" size={34} color={deepBlue} style={style.buttonImage} />
			<Text style={[style.durationText]}>{durationText}</Text>
		</View>
		<Text style={style.wideButtonText} testID={timeTestId}>{text}</Text>
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
		color: deepBlue,
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
		color: deepBlue,
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
