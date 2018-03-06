import * as React from 'react'
import {
  View
} from 'react-native'
import User 															from '../../../../containers/User';
import LifevisionDashoboardCellContainer	from './LifevisionDashoboardCellContainer';
import MeditationDashobardCellContainer		from './MeditationDashobardCellContainer';

const renderWithUser = (user) => {
	if(user.showDashboard) {
		return (
			<View style={{ flex: 1}} >
				<LifevisionDashoboardCellContainer />
				<MeditationDashobardCellContainer />
			</View>
		)
	}
	return null
}

export default DashboardCellsContainer = () => (
	<User 
		renderWithUser={renderWithUser}
	/>
)
