// @flow

import React, { Component } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { styles } from 'react-native-theme';
import Markdown from '../../../Modules/Markdown';
import Button from '../../../components/Button';
import { IAssignment, IStep } from '../../../interfaces';
import AssignmentNumber from './AssignmentNumber';
import markdownStyles from '../../../styles/Markdown/assignment';

type Props = {
	assignments: IAssignment[],
	currentStep: IStep,
	color: string,
	goToWorkBookScreen(): any
};

const AssignmentComponent = ({ assignment, index, color, isLastItem }) => (
	<View style={styles.assignmentLeadInScreenSlide} key={index}>
		{!isLastItem && <AssignmentNumber number={index + 1} color={color} />}
		<Markdown
			markdownStyles={{
				...markdownStyles,
				block: {
					...markdownStyles.block,
					width: Dimensions.get('window').width - (!isLastItem ? 70 : 30)
				},
				list: {
					width: Dimensions.get('window').width - (!isLastItem ? 70 : 30)
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
		<ScrollView 
			contentContainerStyle={[styles.assignmentLeadInScreenContainer, { paddingBottom: 30 }]}
			automaticallyAdjustContentInsets={true}>
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
