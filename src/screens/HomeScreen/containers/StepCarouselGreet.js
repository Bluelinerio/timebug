import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles, { colors } from '../styles';
import { connect } from 'react-redux';
import type Step from '../../../services/cms'
import { STEP_START_INDEX } from '../../../services/cms'
import selectors from '../../../redux/selectors';

const mapStateToProps = (state) => {
	const steps:[Step] = selectors.sortedSteps(state);
	const stepForIndex = (index: number): Step => steps[index]
	return ({ stepForIndex })
}

const { title, subtitle } = {
	title: 'Welcome Nice to Meet!',
	subtitle: 'No momentum | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots'
};

//	const aboutText = selectors.aboutText(state) 

const Greet = ({ index, stepForIndex }) => (
	<View>
		<Text style={styles.title} numberOfLines={1}>{stepForIndex(index) ? stepForIndex(index).stepScreenDescription : title }</Text>
		<Text style={styles.subtitle} numberOfLines={3}>{subtitle} </Text>
	</View>
);

export default connect(mapStateToProps)(Greet)