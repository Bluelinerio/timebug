import { connect } from 'react-redux';
import selectors from '../../../redux/selectors';
import GoalReview from '../components/GoalReview';
import { changeUI } from '../../../redux/actions/ui.actions';
import { withNavigation } from 'react-navigation';
import { compose } from 'recompose';

const mapStateToProps = (state: any) => {
  const stateForScreen = selectors.stateForScreen(state);
  return {
    stateForScreen,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setScreenStatusWrapper: (screen: string) => (params: any) =>
      dispatch(changeUI({ screen, params })),
  };
};

const onPressSubstep = (data, setScreenStatus, step) => {
  const substepIndex = '5';
  return (goal, substep) => {
    const { _id } = goal;

    const index = data.reduce((index, el, i) => {
      if (el._id === _id) return i;
      return index;
    }, -1);

    const substepData = data[index][substepIndex];

    const substepValue = substepData.value.map(value => {
      if (value._id !== substep._id) return value;
      return substep;
    });

    const newData = data.map(d => {
      if (d._id === _id)
        return {
          ...d,
          [substepIndex]: {
            ...substepData,
            value: substepValue,
          },
        };
      return d;
    });

    setScreenStatus({ [step]: newData });
  };
};

const textEvent = (data, index, setScreenStatus, step) => {
  const fn = text => {
    const goal = data[index];

    const newData = data.map(d => {
      if (d._id === goal._id)
        return {
          ...d,
          extra: {
            ...d.extra,
            notes: text,
          },
        };
      return d;
    });

    setScreenStatus({ [step]: newData });
  };
  return fn;
};

const switchGoal = (data, index, setScreenStatus, step) => {
  const fn = () => {
    const goal = data[index];

    const newData = data.map(d => {
      if (d._id === goal._id) {
        const status = d.extra ? !!d.extra.completed : false;
        return {
          ...d,
          extra: {
            ...d.extra,
            completed: !status,
          },
        };
      }
      return d;
    });

    setScreenStatus({ [step]: newData });
  };
  return fn;
};

const softDelete = (data, index, setScreenStatus, unsetGoal, step) => {
  const fn = () => {
    const goal = data[index];

    const newData = data.map(d => {
      if (d._id === goal._id)
        return {
          ...d,
          extra: {
            ...d.extra,
            deleted: true,
          },
        };
      return d;
    });

    unsetGoal();
    setScreenStatus({ [step]: newData });
  };
  return fn;
};

const merge = (stateProps, dispatchProps, ownProps) => {
  const { goal: { _id }, unsetGoal } = ownProps;
  const { navigation: { state: { params: { step, screen } } } } = ownProps;
  const { stateForScreen } = stateProps;
  const screenData = stateForScreen(screen);
  const data = screenData[step] || [];
  const [currentGoal, index] = data.reduce((res, g, index) => {
    if (g._id === _id) return [g, index];
    return res;
  }, []);
  const { setScreenStatusWrapper } = dispatchProps;
  const setScreenStatus = setScreenStatusWrapper(screen);
  const onPress = onPressSubstep(data, setScreenStatus, step);
  const onTextChange = textEvent(data, index, setScreenStatus, step);
  const toggleGoal = switchGoal(data, index, setScreenStatus, step);
  const deleteGoal = softDelete(data, index, setScreenStatus, unsetGoal, step);
  return {
    ...ownProps,
    goal: currentGoal,
    goalIndex: index,
    onPress,
    onTextChange,
    toggleGoal,
    deleteGoal,
  };
};

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps, merge)
)(GoalReview);
