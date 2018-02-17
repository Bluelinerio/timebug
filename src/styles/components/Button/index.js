import { Dimensions, Platform } from 'react-native';
import { deepBlue, white } from '../../../constants/colors';
import {
	human,
	systemWeights,
	iOSColors,
	iOSUIKit,
	material,
  sanFranciscoWeights,
	robotoWeights
} from "react-native-typography";

const buttonHeight = 44
const marginHorizontal = 10
const marginBottom = 20
const minWidthWide = 240
const minWidthNarrow = 128
const buttonTextSize = 15

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
		minWidth: minWidthWide,
		paddingHorizontal: paddingHorizontal.wide,
	},
	makeWideButtonNarrow: {
		minWidth: minWidthNarrow,
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
		fontFamily: 'Metropolis',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: buttonTextSize,
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