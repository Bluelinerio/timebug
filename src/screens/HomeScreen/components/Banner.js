/* @flow */

import React from 'react';
import { Image, Platform, Text, View, SafeAreaView } from 'react-native';
import styles from '../styles/index.styles'
import VerticalGradient from './VerticalGradient';
import Logo from './Logo';

const Banner = ({ title = 'Test' } : {title: string }) => (
	<SafeAreaView style={[styles.bannerContainer]} forceInset={{ vertical: 'never' }}>
		<View style={styles.banner}>
			<VerticalGradient />
			<Logo />
			<Text style={styles.bannerTitle}>{title}</Text>
		</View>
	</SafeAreaView>
);

export default Banner;