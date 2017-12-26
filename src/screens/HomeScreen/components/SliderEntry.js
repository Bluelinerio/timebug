import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ParallaxImage } from 'react-native-snap-carousel';
import CustomeImage from '../../../components/CustomImage';
import styles, { spinnerEvenColor, spinnerUnEvenColor } from '../styles/SliderEntry.style';
import type { Step, Icon } from '../../../models/cms.models';
import { getImageUrl } from '../../../models/cms.models';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce'

type Prop = {
	data: Step,
	even: boolean,
	parallax: boolean,
	parallaxProps: object,
	width: number,
	height: number,
	onPress: Function
};

export default class SliderEntry extends PureComponent<Prop> {
	get image() {
		const { data: { icon }, parallax, parallaxProps, even } = this.props;

		return parallax ? (
			<CustomeImage
				source={{ uri: getImageUrl(icon) }}
				containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
				style={styles.svg}
				showSpinner={true}
				spinnerColor={even ? spinnerEvenColor : spinnerUnEvenColor}
				{...parallaxProps}
			/>
		) : (
			<CustomeImage source={{ uri: getImageUrl(icon) }} style={styles.svg} />
		);
	}

	render() {
		const { onPress, data: { title, subtitle }, even } = this.props;
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
					<Text style={[styles.subtitle, even ? styles.subtitleEven : {}]} numberOfLines={2}>
						{subtitle}
					</Text>
				</View>
			</TouchableBounce>
		);
	}
}
