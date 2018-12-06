import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { compose, mapProps, renderComponent, branch } from 'recompose';
import selectors from '../redux/selectors';
import UserAnonymousError from '../containers/UserAnonymousError';
import DefaultIndicator from '../components/DefaultIndicator';

const unpackStepParamsFromNavigation = ({
  state: { params: { stepId, stepColor, stepNumber, formId } },
}) => ({
  stepId,
  stepColor,
  stepNumber,
  formId,
});

export const withNavigationAndStep = compose(
  connect(state => ({ steps: selectors.steps(state) })),
  withNavigation,
  mapProps(props => {
    if (!props.navigation) {
      if (__DEV__) {
        throw new Error('missing navigation in props');
      } else {
        return props;
      }
    }
    const { steps, navigation } = props;
    const {
      /*, stepColor, stepNumber */
      stepId,
      formId,
    } = unpackStepParamsFromNavigation(navigation);

    return {
      ...props,
      step: steps[stepId],
      formId,
      navigation,
    };
  })
);

const unpackMeditationParamsFromNavigation = ({
  state: { params: { id } },
}) => ({
  id,
});

export const withNavigationAndMeditation = compose(
  connect(state => ({
    meditations: selectors.meditations(state),
  })),
  withNavigation,
  mapProps(props => {
    if (!props.navigation) {
      if (__DEV__) {
        throw new Error('missing navigation in props');
      } else {
        return props;
      }
    }
    const { meditations, navigation } = props;
    const meditationIdFromNavigation = unpackMeditationParamsFromNavigation(
      navigation
    ).id;
    const meditation =
      (meditationIdFromNavigation &&
        meditations.find(item => item.id === meditationIdFromNavigation)) ||
      meditations[0];
    return {
      ...props,
      meditation,
    };
  })
);

export const userRequired = compose(
  connect(state => ({
    isNotLoggedIn: selectors.isNotLoggedIn(state),
    isAnonymous: selectors.isAnonymous(state),
  })),
  branch(
    ({ isNotLoggedIn }) => isNotLoggedIn,
    branch(
      ({ isAnonymous }) => isAnonymous,
      renderComponent(UserAnonymousError),
      renderComponent(DefaultIndicator)
    )
  )
);
