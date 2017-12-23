// @flow
import React from 'react'
import { connect } from 'react-redux'
import StartButton from '../components/StartButton'
import { goToAssignmentFlow } from "../../../redux/actions/nav.actions";
import selectors from '../../../redux/selectors';

const mapStateToProps = (state) => {
  const number = selectors.currentStepNumber(state);
  const duration = selectors.currentStep(state).duration;
  const durationText = `${duration}min`
  const text = 'START'
  return {
    number,
    durationText,
    text
  }
}

const StartButtonContainer = (props) => <StartButton onPress={ () => props.goToAssignmentFlow(props.number) } {...props}/>

export default connect(mapStateToProps, ({ goToAssignmentFlow }) )(StartButtonContainer)
