// @flow

import React, { Component, PureComponent } from 'react';
import { Dimensions, ScrollView, View, Animated} from 'react-native';
import { styles } from 'react-native-theme';
import { Pages } from 'react-native-pages';

import Markdown from '../../../Modules/Markdown';
import Button from '../../../components/Button';
import AssignmentNumber from './AssignmentNumber';
import BeginWorkbookButton from '../containers/BeginWorkbookButton';
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
	return (
	<View 
		style={styles.assignmentLeadInScreenSlide} 
		>	
			<View>
				<View style={{
					flexDirection: 'row',
				}}
				>
					{!isLastItem && <AssignmentNumber number={index + 1} color={color} />}
					{SHOW_MARKUP && 
						<AnimatedMarkdown
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
						</AnimatedMarkdown>
					}
					{!SHOW_MARKUP && 
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
					}
				</View>
				{isLastItem && <BeginWorkbookButton 
					color={color} 
					number={step}
					/>
				}
			</View>
	</View>)
}
