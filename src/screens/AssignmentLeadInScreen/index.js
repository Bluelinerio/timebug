import screen from './containers/AssignmentsLeadInScreenContainer';

screen.navigationOptions = ({ navigation: { state: { params: { color, step } } } }) => {
	return {
		title: 'Exercise',
		headerStyle: {
			backgroundColor: color || StyleSheet.flatten(styles.headerColor).backgroundColor
		},
		headerTintColor: 'white'
	}
}

export default {
  screen,
}