// @flow
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from 'react-native-theme';

const CicleWidth = 32
export default ({ number, color }) => {
	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				width: CicleWidth,
				height: CicleWidth,
				borderRadius: 32,
				marginRight: 10,
				backgroundColor: color,
			}}
		>
			<Text
				style={{
					fontFamily: 'Helvetica',
					fontSize: 18,
					textAlign: 'center',
					color: 'white'
				}}
			>
				{number}
			</Text>
		</View>
	);
};
