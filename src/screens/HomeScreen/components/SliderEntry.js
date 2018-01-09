import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ParallaxImage } from 'react-native-snap-carousel';
import CustomImage from '../../../components/CustomImage';
import styles, { spinnerEvenColor, spinnerUnEvenColor } from '../styles/SliderEntry.style';
import type { Step, Icon } from '../../../services/cms';
import { getImageUrl } from '../../../services/cms'
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce'

export type Item = {
	title:string, 
	subtitle:string,
	sourceImage:string
}

type Prop = {
	data: Item,
	even: boolean,
	parallax: boolean,
	parallaxProps: object,
	width: number,
	height: number,
	onPress: Function
};

export default class SliderEntry extends PureComponent<Prop> {
	get image() {
		const { data: { sourceImage }, parallax, parallaxProps, even } = this.props;
		return parallax ? (
			<CustomImage
				imageUri={sourceImage}
				containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
				style={styles.svg}
				showSpinner={true}
				spinnerColor={even ? spinnerEvenColor : spinnerUnEvenColor}
				{...parallaxProps}
			/>
		) : (
			<CustomImage imageUri={sourceImage} style={styles.svg} />
		);
	}

	render() {
		const { onPress, data: {title, subtitle}, even } = this.props;
		const uppercaseTitle = title ? (
			<Text style={[styles.title, even ? styles.titleEven : {}]} numberOfLines={3}>
				{title.toUpperCase()}
			</Text>
		) : (
			false
		);

		return (
			<TouchableBounce style={[styles.slideInnerContainer]} onPress={onPress}>
				<View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
					{this.image}
					<View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
				</View>
				<View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
					{uppercaseTitle}
					<Text style={[styles.subtitle, even ? styles.subtitleEven : {}]} numberOfLines={1}>
						{subtitle}
					</Text>
				</View>
			</TouchableBounce>
		);
	}
}
