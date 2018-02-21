import React from 'react'
import {
	Button,
	Text,
	SafeAreaView
} from 'react-native'
import screen from './containers/WorkbookDoneScreenContainer';
import { reset } from '../../redux/actions/nav.actions';

// import Icon from 'react-native-vector-icons/Entypo'
// import styles from '../../styles/components/Button'
// <Text style={styles.wideButtonText}>Done</Text>
// style={{
// 						paddingTop: 14,
// 						paddingHorizontal: 16,
// 						right: 16
// 					}}

screen.navigationOptions = ({ navigation: { dispatch, state: { params: { stepColor, stepNumber } } } }) => {
	return {
		headerRight: (
			<SafeAreaView style={{flexDirection: 'row'}}>
				<Button
					title={'Done'}
					color={'white'}
					backgroundColor={stepNumber}
					onPress={() => dispatch(reset())}
					style={{
						paddingTop: 14,
						paddingHorizontal: 16,
					}}
				/>
			</SafeAreaView>
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