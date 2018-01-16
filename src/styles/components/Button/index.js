import { Dimensions } from 'react-native';
import { deepBlue, white } from '../../../constants/colors';

const buttonHeight = 44;
const marginHorizontal = 10;
const marginBottom = 20
const paddingHorizontal = {
	sides: 10,
	wide: 50,
	narrow: 35
}
const style = {
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom,
		paddingVertical: 4,
		// borderWidth: 1,
		// borderColor:'green'
	},
	buttonIconLeft: {
		marginLeft: marginHorizontal
	},
	buttonIconRight: {
		marginRight: marginHorizontal
	},
	wideButton: {
		height: buttonHeight,
		borderRadius: buttonHeight,
		alignSelf: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		marginHorizontal,
		minWidth: 240,
		paddingHorizontal: paddingHorizontal.wide,
	},
	makeWideButtonNarrow: {
		minWidth: 128,
		paddingHorizontal: paddingHorizontal.narrow,
	},
	left: {
		justifyContent: 'flex-start',
		paddingHorizontal: paddingHorizontal.sides
	},
	right: {
		justifyContent: 'flex-end',
		paddingHorizontal: paddingHorizontal.sides
	},
	wideButtonText: {
		fontFamily: 'Helvetica',
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'center',
		color: white
	},
	buttonGroup: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
}

export default style;