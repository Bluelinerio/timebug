import { ScrollView, StatusBar, Platform, StyleSheet } from 'react-native';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const STATUS_BAR_OFFSET_Y = Platform.OS === 'ios' ? 44 : 56;

export default ({ backgroundColor, ...props }) => (
	<View style={[styles.statusBar, { backgroundColor }]}>
		<StatusBar translucent backgroundColor={backgroundColor} {...props} />
	</View>
);


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	statusBar: {
		height: STATUS_BAR_HEIGHT
	},
	content: {
		flex: 1,
		backgroundColor: '#33373B'
	}
});
