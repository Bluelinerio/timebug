import React from 'react'
import screen from './containers/AssignmentDoneScreenContainer';

screen.navigationOptions = ({ navigation: { state: { params: { color, step } } } }) => {
	return {
		title: 'ASSIGNMENT',
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