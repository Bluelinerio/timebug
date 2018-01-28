// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PagninatedCarousel from '../components/PagninatedCarousel';
import type Item from '../components/SliderEntry'
import type Step 	from '../../../services/cms'
import { getImageUrl } from '../../../services/cms'
import selectors from '../../../redux/selectors'
import { goToAssignmentFlow } from '../../../redux/actions/nav.actions';


const mapStateToProps = (state:any) => {
	const steps:[Step] = selectors.sortedSteps(state)
	const items: [Item] = steps.map(step => ({ 
		...step, 
		subtitle: `Step ${step.number}, Phase: ${step.type}`,
		sourceImage: getImageUrl(step.icon) 
	}))
	return ({items})
}

const onPress = (item, index) => goToAssignmentFlow(item.number);

export default connect(mapStateToProps, ({ onPress }) )(PagninatedCarousel);
