import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles, { colors } from '../styles/index.styles';

const { title, subtitle } = {
	title: 'Nice to Meet!',
	subtitle: 'No momentum | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots'
};

export default ({ step }) => (
	<View>
		<Text style={styles.title}>{title}</Text>
		<Text style={styles.subtitle}>{subtitle}</Text>
	</View>
);
