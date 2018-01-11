import React from 'react'
import screen from './containers/AssignmentDoneScreenContainer';

screen.navigationOptions = ({ navigation: { state: { params: { color, step } } } }) => {
	return {
		title: 'ASSIGNMENT',
		headerTitleStyle: {
			textAlign: 'center',
			alignSelf: 'center',
		},
		headerStyle: {
			backgroundColor: color
		},
		headerTintColor: 'white',
    headerLeft: null
	}
}

export default {
  screen,

}