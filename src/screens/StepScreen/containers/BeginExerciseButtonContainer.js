import * as React from 'react'
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation'
import Button                       from '../../../components/Button';
import type { Props }               from '../../../components/Button'
import selectors                    from '../../../redux/selectors';
import { goToWorkbookScreen }       from '../../../redux/actions/nav.actions';

const mapStateToProps = state => {
  const steps = selectors.steps(state);
  const colors = selectors.stepColors(state);
  return {
    steps,
    colors,
  }
}

const textTestId= 'step_to_workbook_text'
const buttonTestId= 'step_to_workbook_button'
const text = 'BEGIN';

const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, steps } = stateProps
  const { navigation: {state: { params:{ stepId }}}} = ownProps
  const backgroundColor = colors[stepId]
  debugger;
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    backgroundColor,
		text, 
    textTestId,
    buttonTestId,
  }
}

export default withNavigation(connect(mapStateToProps, ({ onPressWithProps: goToWorkbookScreen }), merge)(Button));