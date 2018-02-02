// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PagninatedCarousel from '../components/PagninatedCarousel';
import type Item from '../components/SliderEntry'
import type Step 	from '../../../services/cms'
import { getImageUrl, phaseForStepAtIndex } from '../../../services/cms'
import selectors from '../../../redux/selectors'
import { goToAssignmentFlow } from '../../../redux/actions/nav.actions';


const mapStateToProps = (state:any) => {
	const phaseColors = selectors.phaseColors(state);
	const backgroundColorAtIndex = (step:number) => phaseColors[phaseForStepAtIndex(step)]
	const completedForms = selectors.completedForms(state);
	const getFormData = selectors.getFormData(state);
	const isLoggedIn = selectors.isLoggedIn(state)
	const steps:[Step] = selectors.sortedSteps(state).map(step => {
		if(!isLoggedIn) return step

		const form = completedForms.find(form => form.stepId === step.number)
		const lastUpdate = form && form.updatedAt || 0
		const draft = getFormData(step.number);
		return ({
			...step,
			iconName: (lastUpdate !== 0 
				? "check" 
				: draft
					? 'progress-one'
					: null
			),
			progress: {
				lastUpdate,
				draft
			}
		})
	})

	const items: [Item] = steps.map((step,index) => ({ 
		...step, 
		subtitle: `Step ${step.number}, Phase: ${step.type}`,
		sourceImage: getImageUrl(step.icon),
		color:backgroundColorAtIndex(index)
	}))
	return ({
		backgroundColorAtIndex,
		items
	})
}

const onPress = (item, index) => goToAssignmentFlow(item.number);

export default connect(mapStateToProps, ({ onPress }) )(PagninatedCarousel);
