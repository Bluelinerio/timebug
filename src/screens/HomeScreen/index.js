// @flow
import React from 'react';
import { connect } from 'react-redux';

import selectors 		from '../../redux/selectors';
import HomeScreen 	from './components/HomeScreen';
import type Props 	from './components/HomeScreen'

const mapStateToProps = (state: any) => {
  const isHomeScreenLoading = (state) => {
    const isCMSLoading = selectors.isCMSLoading(state)
    const isUserStateUNDETERMINED = selectors.isUserStateUNDETERMINED(state)
    return isCMSLoading || isUserStateUNDETERMINED
  }
  const showLoading = isHomeScreenLoading(state)
  const user = selectors.user(state)
	const userFinishedAllSteps  = false; //!!user && selectors.currentStepNumber(state) > selectors.totalNumberOfSteps(state)

  return { 
    showLoading,
    user,
    userFinishedAllSteps
  }
};

export default connect(mapStateToProps)(HomeScreen)