import React from 'react'
import screen from './containers/AssignmentDoneScreenContainer';

screen.navigationOptions = ({ navigation: { state: { params: { stepColor, stepNumber } } } }) => {
	return {
		title: `Exercise ${stepNumber}`,
		headerStyle: {
			backgroundColor: stepColor
		},
		headerTintColor: 'white',
    headerLeft: null
	}
}

export default {
  screen
}