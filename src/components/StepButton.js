// @flow
import React from 'react';
import { Dimensions, Text, View, TouchableHighlight } from 'react-native';
import { styles } from 'react-native-theme';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
	text: string,
	side: string,
	withArrow: boolean,
	disabled: boolean,
	oPress(): any
};

export default ({ text, onPress, side, withArrow, disabled }: Props) => {
	let minWidth = side ? 128 : 240;
	let paddingHorizontal = side ? 35 : 50;
	let opacity = disabled ? 0.5 : 1;
	return (
		<View style={[styles.buttonContainer, side ? styles[side] : null]}>
			<TouchableHighlight
				style={[
					styles.wideButton,
					styles.wideButtonBackground,
					{
						minWidth,
						paddingHorizontal,
						opacity
					}
				]}
				activeOpacity={opacity}
				onPress={onPress}
				disabled={disabled}
				underlayColor={'#c0c0c0'}
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
					<Text style={styles.wideButtonText}>{text}</Text>
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
