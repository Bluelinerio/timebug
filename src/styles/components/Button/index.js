import theme from 'react-native-theme';
import { Dimensions } from 'react-native';
import { darkishBlue } from '../../../constants/colors';

const style = {
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: Dimensions.get('window').width
	},
	buttonIconLeft: {
		marginLeft: 10
	},
	buttonIconRight: {
		marginRight: 10
	},
	wideButton: {
		height: 44,
		borderRadius: 50,
		alignSelf: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		marginHorizontal: 10
	},
	wideButtonBackground: {
		backgroundColor: darkishBlue
	},
	left: {
		justifyContent: 'flex-start',
		paddingHorizontal: 10
	},
	right: {
		justifyContent: 'flex-end',
		paddingHorizontal: 10
	},
	wideButtonText: {
		fontFamily: 'Helvetica',
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#ffffff'
	},
	buttonGroup: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
}
theme.add(style);

export default style;