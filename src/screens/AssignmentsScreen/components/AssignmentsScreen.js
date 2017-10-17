// @flow

import React, { Component } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { styles } from 'react-native-theme';
import Markdown from 'react-native-easy-markdown';
import Button from '../../../components/Button';
import { IAssignment, IStep } from '../../../interfaces';
import AssignmentNumber from './AssignmentNumber';

type Props = {
	assignments: IAssignment[],
	currentStep: IStep,
	color: string,
	goToWorkBookScreen(): any
};

const AssignmentComponent = ({ assignment, index, color, isLastItem }) => (
	<View style={styles.assignmentsScreenSlide} key={index}>
		{!isLastItem && <AssignmentNumber number={index + 1} color={color} />}
		<Markdown
			markdownStyles={{
				u: {
					fontWeight: 'bold',
					fontFamily: 'Helvetica',
					color: 'rgba(236, 0, 140, 0.72)'
				},
				block: {
					textAlign: 'left',
					fontFamily: 'Helvetica',
					fontSize: 18,
					marginBottom: 15,
					width: Dimensions.get('window').width - (!isLastItem ? 130 : 30)
				},
				list: {
					width: Dimensions.get('window').width - (!isLastItem ? 130 : 30)
				},
				listItemContent: {
					textAlign: 'left',
					fontFamily: 'Helvetica',
					fontSize: 18
				}
			}}
		>
			{assignment.content}
		</Markdown>
	</View>
);

const createSteps = (assignments, color) => {
	return assignments.map((assignment, index) =>
		mapSteps({
			isLastItem: index === assignments.length - 1,
			assignment,
			color,
			index
		})
	);
};

const BeginButton = ({ color, onPress }) => (
	<Button
		onPress={onPress}
		text="BEGIN"
		styles={{
			wideButtonBackground: {
				backgroundColor: color
			}
		}}
	/>
);

export default ({ assignments, color, goToWorkBookScreen }) => {
	return (
		<ScrollView contentContainerStyle={[styles.assignmentsScreenContainer, { paddingBottom: 30 }]}>
			{assignments.map((assignment, index) =>
				AssignmentComponent({
					isLastItem: index === assignments.length - 1,
					assignment,
					color,
					index
				})
			)}
			<BeginButton onPress={() => goToWorkBookScreen({})} color={color} />
		</ScrollView>
	);
};
