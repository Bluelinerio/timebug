// @flow

import React, { Component } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { styles } from 'react-native-theme';
import Markdown from 'react-native-easy-markdown';
import Button from '../../../components/StepButton';
import { IAssignment, IStep } from '../../../interfaces';
import AssignmentNumber from './AssignmentNumber';

type Props = {
	assignments: IAssignment[],
  currentStep: IStep,
  color:string,
	goToWorkBookScreen(): any
};

type State = {
	currentSlide: number
};

const mapSteps = ({ assignment, index, color, isLastItem }) => (
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

export default class AssignmentsScreen extends Component<Props, State> {
	constructor() {
		super();

		this.state = {
			currentSlide: 0
		};
	}

	render() {
		const { assignments, color } = this.props;
		let steps = assignments.map((assignment, index) => mapSteps({
      isLastItem: index === assignments.length - 1,
      assignment,
      color,
      index
    }));

		return (
			<ScrollView contentContainerStyle={[styles.assignmentsScreenContainer, { paddingBottom: 30 }]}>
				{steps}
				<Button onPress={() => this.props.goToWorkBookScreen({})} text="BEGIN" />
			</ScrollView>
		);
	}
}
