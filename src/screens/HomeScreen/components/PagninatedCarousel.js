// @flow

import React, { PureComponent } from 'react';
import { View, Text, Platform } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles, { colors } from '../styles/PagninatedCarousel.style';
import StepGradient from '../containers/StepGradient';
import StepCarouselGreet from '../containers/StepCarouselGreet';
import VerticalGradient from './VerticalGradient';
import SliderEntry from './SliderEntry';
import type { Step } from '../../../models/cms.models';

const SLIDER_1_FIRST_ITEM = 0;
type Props = {
	steps: Array<Step>,
	sliderWidth: number,
	itemWidth: number,
	snap: number => void,
	onPress: Function
};

type State = {
	activeSliderIndex: number,
	activeSliderRef: ?number
};

export default class PagninatedCarousel extends PureComponent<Props, State> {
	state = { activeSliderIndex: SLIDER_1_FIRST_ITEM, activeSliderRef: null };

	render() {
		const { steps, sliderWidth, itemWidth, snap, onPress } = this.props;
		const { activeSliderRef, activeSliderIndex } = this.state;
		return (
			<View style={styles.paginatedCarouselContainer}>
				<VerticalGradient />
				<StepGradient step={activeSliderIndex} />
				<StepCarouselGreet step={activeSliderIndex} />
				<Carousel
					ref={c => {
						if (!this.state.activeSliderRef) {
							this.setState({ activeSliderRef: c });
						}
					}}
					data={steps}
					renderItem={({ item, index }, parallaxProps) => (
						<SliderEntry
							data={item}
							even={false}
							parallax={true}
							parallaxProps={parallaxProps}
							width={sliderWidth}
							onPress={() => {
								onPress(item, index);
							}}
						/>
					)}
					sliderWidth={sliderWidth}
					itemWidth={itemWidth}
					hasParallaxImages={true}
					firstItem={SLIDER_1_FIRST_ITEM}
					inactiveSlideScale={0.95}
					inactiveSlideOpacity={0.75}
					enableMomentum={false}
					lockScrollWhileSnapping={Platform.OS !== 'ios'}
					containerCustomStyle={styles.slider}
					contentContainerCustomStyle={styles.sliderContentContainer}
					loop={false}
					loopClonesPerSide={2}
					autoplay={Platform.OS === 'ios'}
					autoplayDelay={2000}
					autoplayInterval={6000}
					onSnapToItem={(index: number) => {
						this.setState({ activeSliderIndex: index });
						if (snap) {
							snap(index);
						}
					}}
				/>
				<Pagination
					dotsLength={Math.min(steps.length, 10)}
					activeDotIndex={activeSliderIndex % 10}
					containerStyle={styles.paginationContainer}
					dotColor={colors.dotColor}
					dotStyle={styles.paginationDot}
					inactiveDotColor={colors.inactiveDotColor}
					inactiveDotOpacity={0.4}
					inactiveDotScale={0.6}
					carouselRef={activeSliderRef}
					tappableDots={!!activeSliderRef}
				/>
			</View>
		);
	}
}
