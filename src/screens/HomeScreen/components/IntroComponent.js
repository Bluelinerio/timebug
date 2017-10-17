// @flow

import React, { Component } from 'react';
import { Platform, Text, Dimensions, View, TouchableHighlight, ScrollView, Image } from 'react-native';
import Markdown from 'react-native-easy-markdown';
import LinearGradient from 'react-native-linear-gradient';
import Button 	from '../../../components/Button';
import ScrollableHeader from '../../../components/ScrollableHeader';
import DefaultIndicator from '../../../components/DefaultIndicator';
import { backgroundImage, headerBackground } from '../../../resources/images/';
import { whiteTwo, darkishBlue, deepBlue, hotPink } from '../../../constants/colors';
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT, TITLE_OFFSET } from '../../../constants';
import LoginButtonStyles from '../../../styles/components/LoginButton';

const Header = () => (
	<View style={styles.header}>
		<Text style={styles.title}>Welcome</Text>
	</View>
);

const Content = ({ onPress, about }) => (
	<View style={styles.content}>
		<ScrollView
			style={{
				flex: 1,
				paddingHorizontal: 20
			}}
		>
			<Markdown markdownStyles={markdownStyles}>{about}</Markdown>
		</ScrollView>
		<Button onPress={onPress} text={'LOGIN'} styles={LoginButtonStyles}/>
	</View>
);

export default ({ about, onPress }) => {
	if (about) {
		return (
			<ScrollableHeader
				headerMaxHeight={APPBAR_HEIGHT + STATUSBAR_HEIGHT}
				headerMinHeight={STATUSBAR_HEIGHT}
				headerImage={headerBackground}
				header={<Header />}
				content={<Content onPress={onPress} about={about} />}
			/>
		);
	} else {
		return <DefaultIndicator size="large" />;
	}
};

const markdownStyles = {
	block: {
		alignSelf: 'center',
		marginBottom: 15,
		flexWrap: 'wrap',
		flexDirection: 'row',
		fontFamily: 'Helvetica',
		fontSize: 24,
		fontWeight: '300',
		fontStyle: 'italic',
		textAlign: 'center',
		color: 'rgba(236, 0, 140, 0.72)',
		marginHorizontal: 15.5,
		backgroundColor: 'transparent'
	}
};

styles = {
	header: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: {
		paddingTop: 0,
		fontFamily: 'HelveticaNeue',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		color: deepBlue,
		backgroundColor: 'transparent'
	},
	gradient: {
		flex: 1,
		alignSelf: 'stretch'
	},
	content: {
		marginTop: 30,
		marginBottom: 30
	}
};
