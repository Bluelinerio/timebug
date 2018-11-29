// @flow
import React from 'react';
import { connect } from 'react-redux';
import InteractionManager from '../../../utils/InteractionManager';
import DefaultIndicator from '../../../components/DefaultIndicator';
import MyJourneyScreenComponent from '../components/MyJourneyScreenComponent';
import { getCurrentRouteState } from '../../../utils/currentRouteState';

type State = {
  didFinishInitialAnimation: boolean,
};

type Props = {
  component: string,
  reward: string,
};

const mapStateToProps = (state: any) => {
  const nav = state.nav;
  //Due to the new stack nav
  const params = getCurrentRouteState(nav).params;
  let component;
  let reward;
  if (params) {
    component = params.component;
    reward = params && params.params ? params.params.reward : null;
  }
  return {
    component,
    reward,
  };
};

class MyJourneyScreenContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      didFinishInitialAnimation: false,
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        didFinishInitialAnimation: true,
      });
    });
  }

  render() {
    const { didFinishInitialAnimation } = this.state;
    const { component, reward } = this.props;
    return didFinishInitialAnimation ? (
      <MyJourneyScreenComponent component={component} reward={reward} />
    ) : (
      <DefaultIndicator size="large" />
    );
  }
}

export default connect(mapStateToProps)(MyJourneyScreenContainer);
