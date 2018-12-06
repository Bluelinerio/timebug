//@flow
import { connect } from 'react-redux';
import selectors from '../redux/selectors';
import {
  submitAwardAnswers,
  resetAward,
  SubmitAwardValuePayload,
  ExtendedSubmitAwardAnswerPayload,
  evaluateExtendedAward,
} from '../redux/actions/award.actions';
import { AwardData, SimpleModelData } from '../redux/reducers/awards.reducer';

type AwardForStep = {
  model: SimpleModelData,
  data: AwardData,
};

export type AwardDispatch = {
  submitAnswers: SubmitAwardValuePayload => any,
  reset: () => any,
};

export type AwardState = {
  awardModelAndDataForStep: number => AwardForStep,
};

export type ComponentProps = {
  step: number,
};

export type MergeProps = {
  step: number,
  submitAnswers: SubmitAwardValuePayload => any,
  reset: () => any,
  award: AwardForStep,
};

const mapStateToProps = (state: any): AwardState => {
  const awardModelAndDataForStep = selectors.awardModelAndDataForStep(state);
  return { awardModelAndDataForStep };
};

const mapDispatchToProps = (dispatch: any): AwardDispatch => ({
  submitAnswers: (payload: SubmitAwardValuePayload) =>
    dispatch(submitAwardAnswers(payload)),
  extendedSubmit: (payload: ExtendedSubmitAwardAnswerPayload) =>
    dispatch(evaluateExtendedAward(payload)),
  reset: () => dispatch(resetAward()),
});

const merge = (
  stateProps: AwardState,
  dispatchProps: AwardDispatch,
  ownProps: ComponentProps
): MergeProps => {
  const { awardModelAndDataForStep } = stateProps;
  const { step } = ownProps;
  const { data, model } = awardModelAndDataForStep(step);
  if (model && data) {
    return {
      ...ownProps,
      ...dispatchProps,
      award: {
        model,
        data,
      },
    };
  }
  return {
    ...ownProps,
    ...dispatchProps,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, merge);
