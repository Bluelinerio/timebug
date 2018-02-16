// @flow

import React, { PureComponent } from 'react';
import { View, Text, Platform } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles, { colors } from '../styles/PagninatedCarousel.style';
import StepGradientBackground from '../containers/StepGradientBackground';
import StepCarouselGreet from '../containers/StepCarouselGreet';
import VerticalGradient from './VerticalGradient';
import SliderEntry from './SliderEntry';
import type { Item } from './SliderEntry';
import { NUMBER_OF_STEP_FOR_PHASES /* 10 */ } from '../../../services/cms';

const SLIDER_1_FIRST_ITEM = 0;
type Props = {
	backgroundColorAtIndex: (step:number) => string,
	items: Array<Item>,
	sliderWidth: number,
	itemWidth: number,
	snap: number => void,
	onPress: (item:Item, index:number) => void
};

type State = {
	activeSliderIndex: number,
	activeSliderRef: ?number,
};

export default class PagninatedCarousel extends PureComponent<Props, State> {

	state = { 
		activeSliderIndex: SLIDER_1_FIRST_ITEM, 
		activeSliderRef: null,
	};
	render() {
		const { items, backgroundColorAtIndex, sliderWidth, itemWidth, snap, onPress } = this.props;
		const { activeSliderRef, activeSliderIndex } = this.state;
		return (
			<View style={styles.paginatedCarouselContainer}>
				<VerticalGradient />
				<View style={{
					position: 'absolute',
					top: 16,
					left:16,
					right:16,
					bottom:16,
					paddingVertical: 20,
					borderRadius: 24,
					backgroundColor: backgroundColorAtIndex(activeSliderIndex)
				}}
				>
					</View>
				<StepCarouselGreet index={activeSliderIndex} />
				<Carousel
					ref={c => {
						if (!this.state.activeSliderRef) {
							this.setState({ activeSliderRef: c });
						}
					}}
					data={items}
					renderItem={({ item, index }, parallaxProps) => (
						<SliderEntry
							data={item}
							even={false}
							parallax={true}
							parallaxProps={parallaxProps}
							width={sliderWidth}
							onPress={() => onPress(item, index)}
						/>
					)}
					sliderWidth={sliderWidth}
					itemWidth={itemWidth}
					hasParallaxImages={false}
					firstItem={SLIDER_1_FIRST_ITEM}
					inactiveSlideScale={0.95}
					inactiveSlideOpacity={Platform.OS === 'ios' ? 0.9 : 1.0 }
					enableMomentum={Platform.OS !== 'ios'}
					lockScrollWhileSnapping={Platform.OS !== 'ios'}
					containerCustomStyle={styles.slider}
					contentContainerCustomStyle={styles.sliderContentContainer}
					loop={false}
					loopClonesPerSide={2}
					autoplay={false}
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
					dotsLength={Math.min(items.length, NUMBER_OF_STEP_FOR_PHASES)}
					activeDotIndex={activeSliderIndex % NUMBER_OF_STEP_FOR_PHASES}
					containerStyle={styles.paginationContainer}
					dotColor={colors.dotColor}
					dotStyle={styles.paginationDot}
					inactiveDotColor={colors.inactiveDotColor}
					inactiveDotOpacity={0.4}
					inactiveDotScale={0.5}
					carouselRef={activeSliderRef}
					tappableDots={!!activeSliderRef}
				/>
			</View>
		);
	}
}
