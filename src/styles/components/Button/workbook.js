import { hotPink } from '../../../constants/colors';
import style from './index';

const styles = {
	...style,
	wideButton: {
		height: 44,
		borderRadius: 50,
		alignSelf: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		marginHorizontal: 10,
		borderWidth: 1,
		borderColor: hotPink,
		minWidth: 240,
		paddingHorizontal: 50,
	},
	wideButtonText: {
		fontFamily: 'Helvetica',
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'center',
		color: hotPink
	}
}

export default styles;
