// @flow

import React, { Component, PureComponent } from 'react';
import { Dimensions, ScrollView, View, Animated} from 'react-native';
import TouchableBounce 			from 'react-native/Libraries/Components/Touchable/TouchableBounce'
import styles 							from '../styles';
import Markdown  						from '../../../Modules/Markdown';
import AssignmentNumber 		from './AssignmentNumber';
import BeginWorkbookButton 	from '../containers/BeginWorkbookButton';
import markdownStyles 			from '../../../styles/Markdown/assignment'
import { animateStyle } 		from '../../../animations'

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
	progress:Animated.Value,
	scrollToPage:(number) => void
}

const SHOW_MARKUP = true;

const TextRenderer = ({text, animatedStyle, width}) => (
	SHOW_MARKUP ? 
		<Markdown
			markdownStyles={{
				...markdownStyles,
				block: {
					...markdownStyles.block,
					width
				},
				list: {
					width
				}
			}}
		>
			{text}
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
			{text}
		</Animated.Text>
)

export default ({ assignment, index, color, isLastItem, step, progress, scrollToPage }: Props) => {

	const transform = [{
		translateY: progress.interpolate({
			inputRange: [-0.5, 0, 0.5],
			outputRange: [50, 0, -50],
		}),
	}]
	const opacity = progress.interpolate({
		inputRange: [-0.5, 0, 0.5],
		outputRange: [0, 1, 0],
	})

	const animatedStyle =  {
		transform,
		opacity,		
	}

	const jumpToNext = () => isLastItem === false && scrollToPage(index+1)
	return (
		<TouchableBounce 
			disabled={isLastItem}
			onPress={jumpToNext}
			style={styles.assignmentLeadInScreenSlideContainer}
			>
			<View style={styles.assignmentLeadInScreenSlideText}
			>
			{!isLastItem && 
				<AssignmentNumber number={index + 1} color={color} animatedStyle={animatedStyle} />
			}
			<TextRenderer 
				text={assignment.content} 
				animatedStyle={animatedStyle}
				width={Dimensions.get('window').width - (!isLastItem ? 70 : 30)}
			/>
			</View>
			{isLastItem && 
				<BeginWorkbookButton number={step} />
			}
	</TouchableBounce>)
}
