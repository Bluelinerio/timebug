import { connect } from 'react-redux';
import { compose } from 'recompose';
import GoalScreenHandlerComponent from '../components/GoalScreenHandlerComponent';
import FormHOC from '../../../HOC/GenericFormConsumer';
import R from 'ramda';

const wantedKeys = {
  recentGoals: {
    form: 1,
    key: 'recentGoals',
  },
};

const getDataFromForm = (formData: any, wantedKeys: any): {} | any => {
  if (!formData || R.isEmpty(formData) || R.isEmpty(wantedKeys)) return {};
  return Object.keys(wantedKeys).reduce((obj, k) => {
    const { form, key } = wantedKeys[k];
    if (!formData[form] || !formData[form][key]) return { ...obj };
    return {
      ...obj,
      [k]: formData[form][key],
    };
  }, {});
};

const mergeProps = (_, __, ownProps) => {
  const { formData } = ownProps;
  const data = getDataFromForm(formData, wantedKeys);
  return {
    data,
  };
};

export default compose(FormHOC, connect(null, null, mergeProps))(
  GoalScreenHandlerComponent
);
