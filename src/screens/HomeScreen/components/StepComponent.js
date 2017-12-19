// @flow
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Platform, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomImage from '../../../components/CustomImage';
import StartButton from './StartButton';
import { headerBackgroundImage, startButtonBackgroundImage } from '../../../resources/images/';
import { white90 } from '../../../constants/colors';
import type { Step } from '../../../services/cms';

export type Props = { 
	totalNumberOfSteps: number, 
	currentStep: Step, 
	color: string,
	goToAssignmentFlow: ({number : number}) => void,
	imageUri:string
}

export default ({ totalNumberOfSteps, currentStep, color, goToAssignmentFlow, imageUri }: Props) => {
  const { type, stepScreenDescription, number, duration } = currentStep;
	return (
		<View style={[style.header, { backgroundColor: color }]}>
			<Image source={headerBackgroundImage} style={{
				...StyleSheet.absoluteFillObject
			}}/>
      <View style={style.challengeInfo}>
			<CustomImage style={style.headerImage} imageUri={imageUri} testID={'step_picture'}/>
				<View style={style.headerText}>
          <Text style={style.headerTitle} testID={'step_header_title'}>Next challenge</Text>
          <Text style={[style.title]} testID={'step_title'}>{type}</Text>
					<Text style={[style.littleText]} testID={'step_description'}>{stepScreenDescription}</Text>
					<Text style={[style.step]}>
						STEP # {number}/{totalNumberOfSteps}
					</Text>
				</View>
			</View>
			<StartButton buttonTestId={'step_start_button'} timeTestId={'step_time_text'} duration={duration} onPress={() => goToAssignmentFlow({ number }) } />
			{
				/* 
				Todo: Check if this works with detox
				<StartButton buttonTestId={'step_start_button'} timeTestId={'step_time_text'} duration={duration} onPress={buttonAction} /> 
				*/
			}
		</View>
	);
}

const style = {
	header: {
		top: 0,
		height: Dimensions.get('window').width * 0.75,
		width: Dimensions.get('window').width,
		alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 40,
    opacity: 1.0,
    justifyContent: 'space-between',
	},
	headerTitle: {
		fontFamily: 'Helvetica',
		fontSize: 9,
		fontWeight: '300',
		fontStyle: 'italic',
    color: 'white',
    backgroundColor: 'transparent',
    paddingTop: 16,
		paddingBottom: 8
	},
	headerImage: {
		marginTop: 16,
		width: 46,
		height: 46,
		marginHorizontal: 10
	},
	challengeInfo: {
		marginTop: 40,
		width: Dimensions.get('window').width,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	headerText: {
		width: Dimensions.get('window').width - 70
	},
	title: {
		fontFamily: 'Helvetica',
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
    backgroundColor: 'transparent',
  },
	firstPartTitle: {
		width: Dimensions.get('window').width - 90,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 3,
    backgroundColor: 'transparent',
  	},
	step: {
		fontFamily: 'Helvetica',
		fontSize: 10,
		fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
		marginTop: 10
	},
	littleText: {
		fontFamily: 'Helvetica',
		fontSize: 16,
		fontWeight: '300',
		color: white90,
    backgroundColor: 'transparent',
		paddingTop: 3
	}
};