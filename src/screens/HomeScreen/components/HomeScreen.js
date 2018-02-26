// @flow
import React, { PureComponent } from 'react';
import { 
	StatusBar,
	View,
	Text, 
	ScrollView, 
	TouchableHighlight, 
} from 'react-native';
import { SafeAreaView } from 'react-navigation'

import GradientWithTwoColors							from '../../../components/GradientWithTwoColors';
import Error                        			from '../../../components/Error';
import PagninatedCarouselContainer  			from '../containers/PagninatedCarouselContainer';
import LifevisionDashoboardCellContainer	from '../containers/LifevisionDashoboardCellContainer';
import Version														from '../containers/Version'
import styles	           									from '../styles';
import { sliderWidth, itemWidth }   			from '../styles/SliderEntry.style';
import PagninatedCarousel           			from './PagninatedCarousel';
import Banner                       			from './Banner';

/// end other.

import MeditationDashobardCellContainer		from '../containers/MeditationDashobardCellContainer';

export type Props = {
	error?: string
};
type State = {
	stepIndexInFocus: number
};

export default class HomeScreen extends PureComponent<Props, State> {
	state = { stepIndexInFocus: 0 }
	render() {
		const { stepIndexInFocus } = this.state;
		return (
			<SafeAreaView forceInset={{ top: 'always', bottom: 'never' }} style={styles.container}>
				<StatusBar 
					translucent
					barStyle='dark-content'
					backgroundColor={'transparent'}
				/> 
				<ScrollView 
					style={{ flex: 1 }} 
					contentInsetAdjustmentBehavior="automatic"
				>	
					{StatusBar.currentHeight && <View style={{
						backgroundColor: 'white',
						height:StatusBar.currentHeight
					}} />}				
					<Banner />
					<PagninatedCarouselContainer
						itemWidth={itemWidth}
						sliderWidth={sliderWidth}
						snap={index => this.setState({ stepIndexInFocus: index })}
					/>
					<LifevisionDashoboardCellContainer />
					<MeditationDashobardCellContainer />
					<View style={{
						height:300,
						flexDirection: 'row',
						justifyContent:'center',
						alignItems: 'center',
					}}>
						<GradientWithTwoColors 
							gradientTopColor={'#f8f8f8'} 
							gradientBottomColor={'white'}
							opacity={0.5}
						/>
					</View>
					<Version />
				</ScrollView>
			</SafeAreaView>
		);
	}
}