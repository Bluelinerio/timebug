// @flow
import React, { PureComponent } from 'react';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import { NavigationAction } 				from 'react-navigation'

import styles, { colors }           from '../styles';
import { sliderWidth, itemWidth }   from '../styles/SliderEntry.style';
import PagninatedCarousel           from './PagninatedCarousel';
import Banner                       from './Banner';
import PagninatedCarouselContainer  from '../containers/PagninatedCarouselContainer';
import DefaultIndicator             from '../../../components/DefaultIndicator.js';
import Error                        from '../../../components/Error';

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
			<View style={styles.container}>
				<View style={styles.innerScreenContainer} />
				<ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
					<Banner />
					<PagninatedCarouselContainer
						itemWidth={itemWidth}
						sliderWidth={sliderWidth}
						snap={index => this.setState({ stepIndexInFocus: index })}
					/>

				</ScrollView>
				<TouchableHighlight onPress={() => navigation.navigate('Walkthrough')}>
					<Text> About </Text>
				</TouchableHighlight>
			</View>
		);
	}
}