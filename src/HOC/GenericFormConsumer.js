//@flow
import R from 'ramda';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import selectors from '../redux/selectors';

type ModelsAndData = {
  models: any,
  formData: any,
};

type ModelsAndDataCall = (stepId: string) => ModelsAndData;

type FormConsumerProps = {
  modelsAndDataForExercise: ModelsAndDataCall,
};

export type FormDataForExercise = {
  formData: any,
};

export type HandlerFunction = (obj: FormDataForExercise) => any;

const mapStateToProps = (state: any): FormConsumerProps => {
  const modelsAndDataForExercise: ModelsAndDataCall = selectors.modelsAndDataForExercise(
    state
  );
  return { modelsAndDataForExercise };
};

const notEmpty = compose(R.not, R.isEmpty);

const merge = (stateProps, dispatchProps, ownProps) => {
  const { modelsAndDataForExercise } = stateProps;
  const { step } = ownProps;
  const { formData } = modelsAndDataForExercise(step);
  if (formData && notEmpty(formData)) {
    return {
      ...ownProps,
      formData,
    };
  }
  return {
    ...ownProps,
  };
};

export default connect(mapStateToProps, null, merge);
