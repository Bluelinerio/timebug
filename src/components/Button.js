// @flow
import React from 'react';
import { Dimensions, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import defaultStyle from '../styles/components/Button';

export type Side = 'left' | 'right' | null
export type Props = {
	text: string,
	onPress?:() => void,
	onPressWithProps?:(props:Props) => void,
	side?: Side,
	withArrow?: boolean,
	disabled?: boolean,
	styles?: {},
	disabledStyle?:{},
	backgroundColor?: string,
	textTestId: string,
	buttonTestId: string,
}

export default (props: Props) => {
	const { text, onPressWithProps, side, withArrow=false, disabled=false, disabledStyle, backgroundColor, buttonTestId, textTestId } = props;
	let { styles, onPress } = props;

	const minWidth = side ? 128 : 240;
	const paddingHorizontal = side ? 35 : 50;
	const opacity = disabledStyle ? 1 : disabled ? 0.1 : 1;// set alpha to 0.1 when disabled and disabledStyle not provided
	styles = {
		...defaultStyle,
		...styles,
	}

	if(!onPress && onPressWithProps) {
		onPress = () => onPressWithProps(props);
	} 

	return (
		<View style={[styles.buttonContainer, side ? styles[side] : null]}>
			<TouchableHighlight
				style={[
					styles.wideButton,
					{
						minWidth,
						paddingHorizontal,
						opacity,
						backgroundColor
					}
				]}
				activeOpacity={opacity}
				onPress={onPress}
				disabled={disabled}
				underlayColor={'#c0c0c0'}
				testID={buttonTestId}
			>
				<View style={[side && styles.buttonGroup]}>
					{side &&
						side === 'left' &&
						withArrow && (
							<Icon
								style={styles.buttonIconRight}
								name="ios-arrow-back-outline"
								size={30}
								color="white"
							/>
						)}
					<Text style={styles.wideButtonText} testID={textTestId} >{text}</Text>
					{side &&
						side === 'right' &&
						withArrow && (
							<Icon
								style={styles.buttonIconLeft}
								name="ios-arrow-forward-outline"
								size={30}
								color="white"
							/>
						)}
				</View>
			</TouchableHighlight>
		</View>
	);
};