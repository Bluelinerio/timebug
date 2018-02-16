// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { NavigationActions, withNavigation } from 'react-navigation';

import { submitFormValue, syncFormData } from '../../../redux/actions/formData.actions';
import { goToWorkbookDoneScreen } from '../../../redux/actions/nav.actions';
import selectors from '../../../redux/selectors'
import type Props               from '../components/WorkbookScreenComponent';
import WorkbookScreenComponent  from '../components/WorkbookScreenComponent';
import DefaultUserContainer     from '../../../containers/DefaultUserContainer';

const mapStateToProps = (state) => {
  const steps = selectors.steps(state);
  const fetching = selectors.isSynchingFormData(state);
  const modelsAndDataForExercise = selectors.modelsAndDataForExercise(state);
  return { steps, fetching, modelsAndDataForExercise }
}

const merge = (stateProps, dispatchProps, ownProps): Props => {

  const { colors, steps} = stateProps;
  const { goToAssignmentLeadInScreen } = dispatchProps
  const { navigation: {state:{ params:{ stepId, formId, stepColor }}}} = ownProps

  const { models, formData } = stateProps.modelsAndDataForExercise(stepId)
  if(Object.keys(models).includes(formId) === false) {
    throw `did not find model for formId ${formId} for stepId:${stepId}`
  }

  const numberOfForms = Object.entries(models).length;
  const formIdIndex = Object.keys(models).indexOf(formId)
  const isFinalForm = numberOfForms - 1 === formIdIndex;
  const ifFirstForm = formIdIndex === 0;
  const buttonMessage = isFinalForm ? 'SUBMIT' : 'NEXT';
  
  const model = models[formId];
  const value = formData[formId]

  const isFetching = !models ? true : stateProps.network > 0

  const cloneStateWithForm = (formId) => ({
    ...ownProps.navigation.state, // basically taking the 'key'
    params : {
      ...ownProps.navigation.state.params,
      formId
    }
  })
  const nextActions = isFinalForm 
    ? [
        goToWorkbookDoneScreen(ownProps), 
        syncFormData()
      ]
    : [
        NavigationActions.setParams(cloneStateWithForm( Object.keys(models)[formIdIndex + 1] ))
      ]

  const previousAction = ifFirstForm 
    ? NavigationActions.back()
    : NavigationActions.setParams(cloneStateWithForm( Object.keys(models)[formIdIndex - 1] ))

  const next = () => nextActions.forEach(action => ownProps.navigation.dispatch(action) )
  const previous = () => ownProps.navigation.dispatch(previousAction);

  const submit = (value) => ownProps.navigation.dispatch(submitFormValue({
      formId,
      stepId,
      value
    })
  )

  return {
    ...ownProps,
    ...dispatchProps,
    stepColor,
    value,
    model,
    next,
    previous,
    buttonMessage,
    formId,
    numberOfForms,
    isFetching,
    submit,
  }
}


const WorkbookScreenContainer = withNavigation(connect(mapStateToProps, null, merge)(WorkbookScreenComponent))

 export default () => (
    <DefaultUserContainer 
      renderWithUser={() => (<WorkbookScreenContainer />)}
      anonymousMessage={'You need to be logged in to be able to do the exercises. Please go back and log in again.'}
    />
  )

