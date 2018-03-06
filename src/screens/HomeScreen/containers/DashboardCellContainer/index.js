import * as React from 'react'
import {
  View
} from 'react-native'
import LifevisionDashoboardCellContainer	from './LifevisionDashoboardCellContainer';
import MeditationDashobardCellContainer		from './MeditationDashobardCellContainer';

export default DashboardCellsContainer = () => (
	<View style={{flex:1}} >
		<LifevisionDashoboardCellContainer />
		<MeditationDashobardCellContainer />
	</View >
)
