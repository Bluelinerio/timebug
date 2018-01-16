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

const ArrowBack = (props) => (
	<Icon
		name="ios-arrow-back-outline"
		size={30}
		color="white"
		{...props}
	/>
)
const ArrowForward = (props) => (
	<Icon
		name="ios-arrow-forward-outline"
		size={30}
		color="white"
		{...props}
	/>
)

export default (props: Props) => {
	const { 
		text,
		onPressWithProps,
		side,
		withArrow=false,
		disabled=false,
		disabledStyle,
		backgroundColor,
		buttonTestId,
		textTestId 
	} = props;
	
	const onPress = onPressWithProps ? () => onPressWithProps(props) : props.onPress;

	const styles = {
		...defaultStyle,
		...props.styles,
	}
	const opacity = disabledStyle ? 1 : disabled ? 0.1 : 1;// set alpha to 0.1 when disabled and disabledStyle not provided

	const containerStyle = [
		styles.buttonContainer,
		side && styles[side],
	];
	
	const touchableStyle = [
		styles.wideButton,
		side && styles.makeWideButtonNarrow,
		{
			opacity,
			backgroundColor
		}
	]
	const touchableHighlightProps = {
		style: touchableStyle,
		activeOpacity: opacity,
		onPress: onPress,
		disabled: disabled,
		underlayColor: '#c0c0c0',
		testID: buttonTestId,
	}

	const buttonGroupProps = {
		style: [side && styles.buttonGroup]
	}

	return (
		<View style={containerStyle}>
			<TouchableHighlight
				{...touchableHighlightProps}
			>
				<View 
					{...buttonGroupProps}
				>
					{side && side === 'left' && withArrow && (
						<ArrowBack
							style={styles.buttonIconRight}
						/>
					)}
					<Text 
						style={styles.wideButtonText} 
						testID={textTestId}
					>
						{text}
					</Text>
					{side && side === 'right' && withArrow &&  (
						<ArrowForward
							style={styles.buttonIconLeft}
						/>
					)}
				</View>
			</TouchableHighlight>
		</View>
	);
};