// @flow

import React, { Component, PureComponent } from 'react';
import { Dimensions, ScrollView, View, Animated} from 'react-native';
import { styles } from 'react-native-theme';
import { Pages } from 'react-native-pages';

import Markdown from '../../../Modules/Markdown';
import Button from '../../../components/Button';
import type { Assignment, Step } from '../../../services/cms';
import AssignmentNumber from './AssignmentNumber';
import BeginButton from '../containers/BeginButton';
import markdownStyles from '../../../styles/Markdown/assignment'
import { animateStyle } from '../../../animations'

const AnimatedMarkdown = Animated.createAnimatedComponent(Markdown)

class AnimateWrapper extends PureComponent {
  render() {
    const { children, ...props } = this.props;
    return React.cloneElement(children, { ...props });
  }
}
const Animate = Animated.createAnimatedComponent(AnimateWrapper);

type AssignmentComponentProps = { 
	assignment: Assignment, 
	index:number, 
	color:string, 
	isLastItem:bool, 
	progress:Animated.Value 
}

const AssignmentComponent = ({ assignment, index, color, isLastItem, progress }: AssignmentComponentProps) => {
	return (
	<View 
		style={animateStyle({
			progress, 
			effect:'zoom', 
			style: styles.assignmentLeadInScreenSlide
		})} 
		>	
			<View>
				<View style={{
					flexDirection: 'column',
				}}
				>
					{!isLastItem && <AssignmentNumber number={index + 1} color={color} />}
					{false &&<AnimatedMarkdown
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
					</AnimatedMarkdown>}
					<Animated.Text style={animateStyle({
						progress, 
						effect:'rise', 
						style:{
							backgroundColor: 'transparent',
							textAlign: 'left',
							fontSize: 20,
						}
					})}
					>
						{assignment.content}
					</Animated.Text>
				</View>
				{isLastItem && <BeginButton color={color} />}
			</View>
	</View>)
}

type Props = {
	progress: any,
	assignments: Array<Assignment>,
	color: string
};

export default ({ assignments, color }: Props) => {
	return (
			<View style={{ flex: 1 }}>
				<Pages horizontal={false}>
					{assignments.map((assignment , index) => 
						<AssignmentComponent
							key={index}
							isLastItem={index === assignments.length - 1}
							assignment={assignment}
							color={color}
							index={index}
						/>)
					}
				</Pages>
      </View>
	);
};