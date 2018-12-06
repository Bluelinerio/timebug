import { connect } from 'react-redux';
import GoalComponent from '../components/GoalComponent';
import type { GoalStepComponentProps } from '../components/GoalComponent';
import type { Goal } from '../types';
import { goToGoalStepScreen } from '../../../redux/actions/nav.actions';
import { updateGoalStepsInner } from '../../../redux/actions/goals.actions';
import selectors from '../../../redux/selectors';

type DispatchToProps = {
  onPress: () => any,
};

const FIRST_FORM_ID = '1';

type GoalContainerProps = {
  goal: Goal,
  goalIndex: number,
};

type StateProps = {
  goalsData: any,
};

const expectedDataFormId = `${1}`;

const mapDispatchToProps = (dispatch: any): DispatchToProps => {
  return {
    onPress: (id: string, goal: Goal) =>
      dispatch(
        goToGoalStepScreen({
          goalId: id,
          goalTitle: goal.goal,
          goalType: goal.goalTypes,
          formId: FIRST_FORM_ID,
        })
      ),
    onGoalSwitch: ({
      id,
      formId,
      goalId,
      value,
    }: {
      id: string,
      formId: string,
      goalId: string,
      value: boolean,
    }) => dispatch(updateGoalStepsInner({ id, formId, goalId, value })),
  };
};

const mapStateToProps = (state: any): { goalsData: any } => {
  const goalsData = selectors.getGoalsData(state);
  return {
    goalsData,
  };
};

const mergeProps = (
  stateProps: StateProps,
  dispatchProps: DispatchToProps,
  ownProps: GoalContainerProps
): GoalStepComponentProps => {
  const { goal, goalIndex } = ownProps;
  const { onPress, onGoalSwitch } = dispatchProps;
  const { goalsData } = stateProps;
  const goalSteps = selectors.getGoalsStepsForGoalAndFormStateless(
    goalsData,
    `${goalIndex}`,
    expectedDataFormId
  );
  const steps = goalSteps && goalSteps.goalSteps ? goalSteps.goalSteps : [];
  return {
    goal,
    goalIndex,
    onPress,
    steps,
    onGoalSwitch,
    formId: FIRST_FORM_ID,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  GoalComponent
);
