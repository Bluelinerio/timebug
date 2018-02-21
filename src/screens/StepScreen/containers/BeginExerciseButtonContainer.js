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

const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, steps } = stateProps
  const { navigation: {state:{ params:{ stepId }}}} = ownProps
  const backgroundColor = colors[stepId]

  const text = 'BEGIN';

  const { goToWorkbookScreen } = dispatchProps;
  const onPressWithProps = goToWorkbookScreen
  return {
    ...ownProps,
    onPressWithProps,
    textTestId,
    buttonTestId,
		text,
    backgroundColor,
  }
}

export default withNavigation(connect(mapStateToProps,({ goToWorkbookScreen}), merge)(Button));