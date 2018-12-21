/**
 * Adapt to new form keys
 */
// @flow
import { connect } from 'react-redux';
import selectors from '../../../redux/selectors';
import GoalsFromTypeList from '../components/GoalsFromTypeList';
import models from '../../../forms/custom/forms';
import { withNavigation } from 'react-navigation';
import { compose, mapProps } from 'recompose';

type StateProps = {
  model: any,
  data: Array<any>,
};

const mapStateToProps = (state: any): StateProps => {
  const stateForScreen = selectors.stateForScreen(state);
  return {
    stateForScreen,
  };
};

type MergeProps = {
  goals: Array<any>,
  goal: String,
  onSelect: String => any,
};

const mergeProps = (props): MergeProps => {
  const { goal, onSelect, stateForScreen } = props;
  const { navigation: { state: { params: { step, screen } } } } = props;
  const screenData = stateForScreen(screen);
  const data = screenData[step] || [];
  const goalTypeIndex = '2';
  const goals = data.filter(goalData => {
    return goalData[goalTypeIndex].value.find(g => g === goal);
  });
  return {
    goals,
    goal,
    onSelect,
    model: models[step],
  };
};

export default compose(
  connect(mapStateToProps),
  withNavigation,
  mapProps(mergeProps)
)(GoalsFromTypeList);
