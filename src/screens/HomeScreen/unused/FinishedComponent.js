// @flow

import React, { Component } from 'react';
import { StyleSheet, Platform, Text, Dimensions, View, TouchableHighlight, ScrollView, Image } from 'react-native';
import Markdown from '../../../Modules/Markdown';
import LinearGradient from 'react-native-linear-gradient';
import Button 	from '../../../components/Button';
import ScrollableHeader from '../../../components/ScrollableHeader';
import DefaultIndicator from '../../../components/DefaultIndicator';
import { backgroundImage, headerBackground } from '../../../resources/images/';
import { whiteTwo, deepBlue, hotPink } from '../../../constants/colors';
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT, TITLE_OFFSET } from '../../../constants';
import LoginButtonStyles from '../../../styles/components/LoginButton';
import markdownStyles from '../../../styles/Markdown/intro';

const Header = () => (
	<View style={styles.header}>
	</View>
);

const Content = ({ about }) => (
	<View style={styles.content}>
		<ScrollView
			style={{
				flex: 1,
				paddingHorizontal: 20
			}}
		>
			<Markdown markdownStyles={markdownStyles}>{about}</Markdown>
		</ScrollView>
	</View>
);

export default () => {
    const about= `You have finnally finished this journey. . .
    Take a moment to review the app and help others achieve their goals`
    return (
        <ScrollableHeader
            headerMaxHeight={STATUSBAR_HEIGHT}
            headerMinHeight={STATUSBAR_HEIGHT}
            header={<Header />}
            content={<Content about={about} />}
        />
    );
};

const styles = StyleSheet.create({
	header: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'white'
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
});
