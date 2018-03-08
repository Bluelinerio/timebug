// @flow
import React, { PureComponent } from 'react'
import { 
	StatusBar,
	View,
	Text, 
	ScrollView, 
	TouchableHighlight, 
} from 'react-native'
import { SafeAreaView } from 'react-navigation'

import GradientWithTwoColors							from '../../../components/GradientWithTwoColors'
import PagninatedCarouselContainer  			from '../containers/PagninatedCarouselContainer'
import Version														from '../containers/Version'
import DashboardCellsContainer						from '../containers/DashboardCellContainer'
import MoreButtonContainer								from '../containers/MoreButtonContainer'
import styles	           									from '../styles'
import { sliderWidth, itemWidth }   			from '../styles/SliderEntry.style'
import PagninatedCarousel           			from './PagninatedCarousel'
import Banner                       			from './Banner'
import Space															from './Space'
/// end other.

const StatusBarHeightSlugForAndroid = ({ backgroundColor = 'white' }) => {
	if( StatusBar.currentHeight && StatusBar.translucent ) {
		return <View 
							style={{
								backgroundColor,
								height: StatusBar.currentHeight
							}} 
            />
	}
	return null
}

export default class HomeScreen extends PureComponent {
	render() {
		return (
			<SafeAreaView 
				forceInset={{ top: 'always', bottom: 'never' }} 
				style={styles.container}
			>
				<StatusBar 
					translucent
					barStyle='dark-content'
					backgroundColor={'transparent'}
				/> 
				<ScrollView 
					style={{ flex: 1 }} 
					contentInsetAdjustmentBehavior="automatic"
				>	
					<StatusBarHeightSlugForAndroid backgroundColor={'white'}/>
					<Banner />
					<PagninatedCarouselContainer
						itemWidth={itemWidth}
						sliderWidth={sliderWidth}
					/>
					<DashboardCellsContainer />
					<MoreButtonContainer />
					<Space />
					<Version />
				</ScrollView>
			</SafeAreaView>
		)
	}
}
