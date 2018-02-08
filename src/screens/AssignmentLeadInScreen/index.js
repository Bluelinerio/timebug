import screen from './containers/AssignmentsLeadInScreenContainer';

screen.navigationOptions = ({ navigation: { state: { params: { color, step } } } }) => {
	return {
		title: `Exercise ${step}`,
		headerStyle: {
			backgroundColor: color || StyleSheet.flatten(styles.headerColor).backgroundColor
		},
		headerTintColor: 'white'
	}
}

export default {
  screen,
}