import React from 'react'
import screen from './containers/AssignmentDoneScreenContainer';
import Icon from 'react-native-vector-icons/Entypo'
import { reset } from '../../redux/actions/nav.actions';

screen.navigationOptions = ({ navigation: { dispatch, state: { params: { stepColor, stepNumber } } } }) => {
	return {
		headerRight: (
			<Icon 
				name={'check'}
				size={20}
				color={'white'}
				style={{
					paddingTop: 14,
					paddingHorizontal: 16,
				}}
				onPress={ () => dispatch(reset()) } 
			/>
		),
		headerStyle: {
			backgroundColor: stepColor,
			borderBottomColor: 'transparent', 
			shadowOpacity: 0, 
			shadowColor: 'transparent' 
		},
		headerTintColor: 'white',
    headerLeft: null
	}
}

export default {
  screen
}