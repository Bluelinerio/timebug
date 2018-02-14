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
	const backgroundColorAtIndex = (step: number) => phaseColors[phaseForStepAtIndex(step)]
	const completedForms = selectors.completedForms(state);
	const incompleteForms = selectors.incompleteForms(state);
	const isLoggedIn = selectors.isLoggedIn(state)

	const steps:[Step] = selectors.sortedSteps(state).map(step => {
		
		if(!isLoggedIn) return step

		const completedForm = completedForms.find(form => form.stepId === step.stepId)
		const lastUpdate = completedForm && completedForm.updatedAt || 0
		const incompleteForm = incompleteForms(step.stepId);
		return ({
			...step,
			iconName: (lastUpdate !== 0 
				? 'check'
				: incompleteForm
					? 'edit'
					: null
			),
			progress: {
				lastUpdate,
				incompleteForm
			}
		})
	})

	const items: [Item] = steps.map((step,index) => ({ 
		...step, 
		subtitle: `Step ${step.number}, Phase: ${step.type}`,
	}))
	return ({
		backgroundColorAtIndex,
		items
	})
}

const onPress = (item, index) => goToAssignmentFlow({ step: item, index})

export default connect(mapStateToProps, ({ onPress }) )(PagninatedCarousel);
