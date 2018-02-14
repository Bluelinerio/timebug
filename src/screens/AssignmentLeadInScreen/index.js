import screen from './containers/AssignmentsLeadInScreenContainer';

screen.navigationOptions = ({ navigation: { state: { params: { stepColor, stepNumber } } } }) => ({
	title: `Exercise ${stepNumber}`,
	headerStyle: {
		backgroundColor: stepColor
	},
	headerTintColor: 'white'
})

export default {
  screen,
}