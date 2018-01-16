import screen from './containers/AssignmentsLeadInScreenContainer';

screen.navigationOptions = ({ navigation: { state: { params: { color, step } } } }) => {
	return {
		title: 'Assignment',
		headerStyle: {
			backgroundColor: color || StyleSheet.flatten(styles.headerColor).backgroundColor
		},
		headerTintColor: 'white'
	}
}

export default {
  screen,
}