import * as React from 'react'
import {
  View
} from 'react-native'
import GradientWithTwoColors from '../../../components/GradientWithTwoColors'

export default () => (
	<View style={{
		height:300,
		flexDirection: 'row',
		justifyContent:'center',
		alignItems: 'center',
	}}>
		<GradientWithTwoColors />
	</View>
)