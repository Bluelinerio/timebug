// @flow

import React, { Component, PureComponent } from 'react';
import { Dimensions, ScrollView, View, Animated} from 'react-native';
import { styles } from 'react-native-theme';
import Markdown from '../../../Modules/Markdown';
import AssignmentNumber from './AssignmentNumber';
import BeginWorkbookButton from '../containers/BeginWorkbookButton';
import markdownStyles from '../../../styles/Markdown/assignment'
import { animateStyle } from '../../../animations'

//const Markdown = Animated.createAnimatedComponent(MyMarkdown)

class AnimateWrapper extends PureComponent {
  render() {
    const { children, ...props } = this.props;
    return React.cloneElement(children, { ...props });
  }
}
const Animate = Animated.createAnimatedComponent(AnimateWrapper);

export type Props = { 
	assignment: Assignment, 
	step: number,
	index: number, 
	color:string, 
	isLastItem:bool, 
	progress:Animated.Value 
}

const SHOW_MARKUP = true;

export default ({ assignment, index, color, isLastItem, step, progress }: Props) => {
	const animatedStyle = animateStyle({
		progress, 
		effect: 'rise', 
		style:{}
	})
	return (
	<View 
		style={[styles.assignmentLeadInScreenSlide]} 
		>	
			{!isLastItem && <AssignmentNumber number={index + 1} color={color} animatedStyle={animatedStyle} />}
			{SHOW_MARKUP ? 
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
				:
				<Animated.Text style={[{
						backgroundColor: 'transparent',
						textAlign: 'left',
						fontSize: 20,
					},
					animatedStyle
				]}
				>
					{assignment.content}
				</Animated.Text>
			}
			{isLastItem && 
				<BeginWorkbookButton number={step} />
			}
	</View>)
}
