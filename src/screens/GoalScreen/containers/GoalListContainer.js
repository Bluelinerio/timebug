import { connect } from 'react-redux';
import selectors from '../../../redux/selectors';
import GoalListComponent from '../components/GoalListComponent';
import { CLEAR_GOAL_STEPS } from '../../../redux/actionTypes';

const mapStateToProps = (state: any) => {
  const step = selectors
    .sortedSteps(state)
    .find(step => `${step.number}` === `${5}`);
  return {
    step,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  clearGoals: () => dispatch({ type: CLEAR_GOAL_STEPS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalListComponent);
