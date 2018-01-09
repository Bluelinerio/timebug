// @flow
import React from 'react';
import { Animated, Text, View } from 'react-native';

const CicleWidth = 32

type Props = {
	number: number,
	color: string,
	animatedStyle: any
}

export default ({ number, color, animatedStyle }: Props) => {
	return (
		<Animated.View
			style={[{
				alignItems: 'center',
				justifyContent: 'center',
				width: CicleWidth,
				height: CicleWidth,
				borderRadius: CicleWidth,
				marginRight: 10,
				marginVertical: 10,
				backgroundColor: color,
			}, animatedStyle ]}
		>
			<Animated.Text
				style={[{
					fontFamily: 'Helvetica',
					fontSize: Math.ceil(CicleWidth * 0.55),
					textAlign: 'center',
					color: 'white',
					backgroundColor: 'transparent'
				}]}
			>
				{number}
			</Animated.Text>
		</Animated.View>
	);
};
