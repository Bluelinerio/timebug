import { connect } from 'react-redux';
import getInsight, { dummyFormValue } from './../../../static/insights';
import InsightComponent from '../components/InsightComponent';
import selectors from '../../../redux/selectors';
import R from 'ramda';

const insight = completedFormsChronologically => {
  if (completedFormsChronologically.length > 0) {
    const latestForm = R.last(R.reverse(completedFormsChronologically));
    const insightText = getInsight(latestForm.stepId, dummyFormValue);
    return {
      insightText,
    };
  }
  return {};
};

const mapStateToProps = state => {
  const completedFormsChronologically = selectors.completedFormsChronologically(
    state
  );
  return {
    ...insight(completedFormsChronologically),
  };
};

export default connect(mapStateToProps, null)(InsightComponent);
