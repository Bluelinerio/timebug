// @flow
import React, { PureComponent } from 'react';
import { 
	StatusBar,
	View,
	Text, 
	ScrollView, 
	TouchableHighlight, 
} from 'react-native';
import { 
	NavigationAction,
	SafeAreaView,
} 				from 'react-navigation'
//// begining
import GradientWithTwoColors							from '../../../components/GradientWithTwoColors';
import DefaultIndicator             			from '../../../components/DefaultIndicator.js';
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
	navigation: any,
	showLoading: boolean,
	userFinishedAllSteps: boolean,
	error: string
};
type State = {
	stepIndexInFocus: number
};

export default class HomeScreen extends PureComponent<Props, State> {
  state = { stepIndexInFocus: 0 }
	render() {
    const {
      navigation,
      showLoading,
      userFinishedAllSteps,
      error,
    } = this.props;
		const { stepIndexInFocus } = this.state;

		if (showLoading) {
			return <DefaultIndicator size='large' />;
		}
		if (error) {
			return <Error message={error} />;
		}

		return (
			<SafeAreaView forceInset={{ top: 'always', bottom: 'never' }} style={styles.container}>
				<StatusBar 
					translucent
					barStyle='dark-content'
					backgroundColor={'black'}
				/> 
				<ScrollView 
					style={{ flex: 1 }} 
					contentInsetAdjustmentBehavior="automatic"
				>
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

