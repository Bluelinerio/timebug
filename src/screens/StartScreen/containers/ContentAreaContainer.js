//@flow
import invariant from 'invariant'
import { connect } from 'react-redux'
import ContentArea from '../components/ContentArea'
import selectors from '../../../redux/selectors'
import { compose } from 'recompose'
import AppVersionProvider from '../../../HOC/AppVersionProvider'

const mapStateToProps = (state: any) => {
  const steps = selectors.steps(state);
  const stepColors = selectors.statefullStepColors(state);

  if (__DEV__) {
    invariant(
      stepColors,
      `the colors for completed-uncompleted steps is not defined`
    );
  }

  return {
    steps,
    stepColors,
  };
};

export default compose(
  connect(mapStateToProps),
  AppVersionProvider
)(ContentArea);
