// @flow

import React, { Component } from 'react';
import { Animated, ScrollView, View } from 'react-native';

type Props = {
	content: ReactElement,
	headerImage: ReactElement,
	headerComponent: ReactElement,
	header: ReactElement,
	headerStyles: any,
	headerMaxHeight: number,
	headerMinHeight: number
};

type State = {
	scrollY: number
};

export default class ScrollableHeader extends Component<Props, State> {
	state = { scrollY: new Animated.Value(0) }

	render() {
		const { content, headerStyles, headerImage, headerComponent, header } = this.props;
		let { headerMinHeight, headerMaxHeight } = this.props;
		if (!headerMinHeight) {
			headerMinHeight = 65;
		}
		if (!headerMaxHeight) {
			headerMaxHeight = 260;
		}
		const headerScrollDistance = headerMaxHeight - headerMinHeight;

		const headerHeight = this.state.scrollY.interpolate({
			inputRange: [0, headerScrollDistance],
			outputRange: [headerMaxHeight, headerMinHeight],
			extrapolate: 'clamp'
		});
		const imageOpacity = this.state.scrollY.interpolate({
			inputRange: [0, headerScrollDistance / 2, headerScrollDistance],
			outputRange: [1, 1, 0],
			extrapolate: 'clamp'
		});
		const imageTranslate = this.state.scrollY.interpolate({
			inputRange: [0, headerScrollDistance],
			outputRange: [0, -50],
			extrapolate: 'clamp'
		});

		return (
			<View style={{ flex: 1 }}>
				<ScrollView  testID={"step_content_scrollable"}
					style={{ flex: 1 }}
					scrollEventThrottle={16}
					automaticallyAdjustContentInsets={false}
					onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }])}
				>
					<View style={{ marginTop: headerMaxHeight }}>{content}</View>
				</ScrollView>
				<Animated.View
					style={[
						headerStyles,
						{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							backgroundColor: 'transparent',
							overflow: 'hidden',
							height: headerHeight
						}
					]}
				>
					{headerImage ? (
						<Animated.Image
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								width: null,
								height: headerMaxHeight,
								zIndex: 10,
								opacity: imageOpacity,
								transform: [{ translateY: imageTranslate }]
							}}
							source={headerImage}
						/>
					) : null}
					{headerComponent ? (
						<Animated.View
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								width: null,
								height: headerMaxHeight,
								zIndex: 9,
								transform: [{ translateY: imageTranslate }]
							}}
						>
							{headerComponent}
						</Animated.View>
					) : null}

					<Animated.View
						style={{
							marginTop: 28,
							height: 32,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'transparent',
							zIndex: 11
						}}
					>
						{header}
					</Animated.View>
				</Animated.View>
			</View>
		);
	}
}
