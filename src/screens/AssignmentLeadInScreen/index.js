import screen from './containers/AssignmentsLeadInScreenContainer';

screen.navigationOptions = ({ navigation: { state: { params: {color, step } } } }) => {
	return {
		title: 'ASSIGNMENT',
		headerTitleStyle: {
			textAlign: 'center',
			alignSelf: 'center',
			fontFamily: 'Helvetica',
			fontSize: 20.5
		},
		headerStyle: {
			backgroundColor: color || StyleSheet.flatten(styles.headerColor).backgroundColor
		},
		headerTintColor: 'white'
	}
}

export default {
  screen,
}