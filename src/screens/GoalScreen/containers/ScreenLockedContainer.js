import { connect } from 'react-redux';
import selectors from '../../../redux/selectors';
import ScreenLockedComponent from '../components/ScreenLockedComponent';
import { goToWorkbookSkippingStepScreen } from '../../../redux/actions/nav.actions';

const FIRST_FORM_ID = '1';

const mapStateToProps = (state: any) => {
  const step = selectors
    .sortedSteps(state)
    .find(step => `${step.number}` === `${5}`);
  return {
    step,
  };
};

// TODO: Maybe replace with withNavigation instead of dispatch
const mapDispatchToProps = (dispatch: any) => ({
  onPress: step =>
    dispatch(
      goToWorkbookSkippingStepScreen({
        step,
        incompleteFormsIds: [FIRST_FORM_ID],
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ScreenLockedComponent
);
