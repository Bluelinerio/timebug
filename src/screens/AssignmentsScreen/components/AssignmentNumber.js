// @flow
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from 'react-native-theme';

const CicleWidth = 52
export default ({ number, color }) => {
	return (
		<View
			style={{
				borderWidth: 1,
				alignItems: 'center',
				justifyContent: 'center',
				width: CicleWidth,
				height: CicleWidth,
				borderRadius: 100,
				marginRight: 21,
				backgroundColor: color,
				borderColor: '#ffffff'
			}}
		>
			<Text
				style={{
					fontFamily: 'Helvetica',
					fontSize: 24,
					textAlign: 'center',
					color: '#ffffff'
				}}
			>
				{number}
			</Text>
		</View>
	);
};
