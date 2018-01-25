// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { NavigationActions } from 'react-navigation';

import { submitFormValue, persisteFormValue } from '../../../redux/actions/formData.actions';
import { goToAssignmentDoneScreen } from '../../../redux/actions/nav.actions';
import selectors from '../../../redux/selectors'
import type { Progress }        from '../../../services/apollo/models';
import type Props               from '../components/WorkbookScreenComponent';
import WorkbookScreenComponent  from '../components/WorkbookScreenComponent';
const SKIPP_ENABLED = false;

const mapStateToProps = (state) => {
  const steps = selectors.steps(state);
  const colors = selectors.stepColors(state);
  const fetching = selectors.fetchingFormData(state) || selectors.fetchingFormModels(state);
  const getFormData = selectors.getFormData(state);
  const getFormModels = selectors.getFormModels(state);
  return { steps, colors, fetching, getFormData, getFormModels }
}

const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, steps} = stateProps;
  const { goToAssignmentLeadInScreen } = dispatchProps
  const { step, color } = ownProps.navigation.state.params;
  const form = ownProps.navigation.state.params.form || 0;
  const progress = { step, form }
  const models = stateProps.getFormModels(step);
  const numberOfForms = Object.entries(models).length;
  const buttonMessage = form + 1 === numberOfForms ? 'SUBMIT' : 'NEXT';
  const formData = stateProps.getFormData(step) || {};
  const getModelForForm = (form: number) => ({
    model: models[form + 1], value: formData[form]
  })
  const isFetching = !models ? true : stateProps.network > 0

  const cloneStateWithForm = (form) => ({
    ...ownProps.navigation.state, // basically taking the 'key'
    params : {
      ...ownProps.navigation.state.params,
      form
    }
  })


  /*
  // unused:
  const previous = () => {
    if (form === 0) {
      ownProps.dispatch(NavigationActions.back())
    } else {
      const state = cloneStateWithForm(form - 1)
      ownProps.navigation.dispatch(NavigationActions.setParams(state))
    }
  }
  */
  const next = () => {
    if(form + 1 === numberOfForms) {
      ownProps.navigation.dispatch(NavigationActions.navigate({
        route:'AssignmentDoneScreen',
        params: {
          step,
          form,
          color
        }
      }))
    } else {
      const state = cloneStateWithForm(form + 1)
      ownProps.navigation.dispatch(NavigationActions.setParams(state))
    }
  }
  return {
    ...ownProps,
    ...dispatchProps,
    progress,
    getModelForForm,
    numberOfForms,
    isFetching,
    color,
    next,
    buttonMessage,
  }
}

export default connect(mapStateToProps, { submitFormValue, persisteFormValue }, merge)(WorkbookScreenComponent)

