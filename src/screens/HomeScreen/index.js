// @flow
import React, { PureComponent } from 'react';
import { View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import LinearGradient from 'react-native-linear-gradient';
import PagninatedCarousel from './components/PagninatedCarousel';
import PagninatedCarouselContainer from './containers/PagninatedCarouselContainer';
import Banner from './components/Banner';
import DefaultIndicator from '../../components/DefaultIndicator.js';
import Error from '../../components/Error';
import styles, { colors } from './styles';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import selectors from '../../redux/selectors';
import type { User } from '../../services/apollo/models';

type Props = {
	navigation: any,
	showLoading: boolean,
	userFinishedAllSteps: boolean,
	error: string,
	user: User,
};
type State = {
	stepIndexInFocus: number
};

class HomeScreen extends PureComponent<Props, State> {
	state = { stepIndexInFocus: 0 };
	render() {
		const { navigation, showLoading, error, user, userFinishedAllSteps } = this.props;
		const { stepIndexInFocus } = this.state;

		if (showLoading) {
			return <DefaultIndicator size='large' />;
		}
		if (error) {
			return <Error message={error} />;
		}

		return (
			<View style={styles.container}>
				<View style={styles.innerScreenContainer} />
				<ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
					<Banner />
					<PagninatedCarouselContainer
						itemWidth={itemWidth}
						sliderWidth={sliderWidth}
						snap={index => this.setState({ stepIndexInFocus: index })}
						onPress={(item, index) => {
							alert(`You've clicked index:${index}\n'${item.title}'`);
						}}
					/>
				</ScrollView>
			</View>
		);
	}
}

const mapStateToProps = (state: any) => {
  const isHomeScreenLoading = (state) => {
    const isStorageNotLoaded = !selectors.isStorageLoaded(state)
    const isCMSLoading = selectors.isCMSLoading(state)
    const isUserStateUNDETERMINED = selectors.isUserStateUNDETERMINED(state)
    return isStorageNotLoaded || isCMSLoading || isUserStateUNDETERMINED 
  }
  const showLoading = isHomeScreenLoading(state)
  const user = selectors.user(state)
	const userFinishedAllSteps  = !!user && selectors.currentStepNumber(state) > selectors.totalNumberOfSteps(state)

  return { 
    showLoading,
    user,
    userFinishedAllSteps
  }
};


export default connect(mapStateToProps)(HomeScreen)