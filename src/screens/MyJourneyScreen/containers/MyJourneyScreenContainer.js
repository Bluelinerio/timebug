// @flow
import React from 'react'
import InteractionManager from '2020_utils/InteractionManager'
import DefaultIndicator from '2020_components/DefaultIndicator'
import User from '2020_containers/User'
import MyJourneyScreenComponent from '../components/MyJourneyScreenComponent'

type State = {
  didFinishInitialAnimation: boolean,
}

class MyJourneyScreenContainer extends React.Component<any, State> {
  constructor(props) {
    super(props)
    this.state = {
      didFinishInitialAnimation: false,
    }
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        didFinishInitialAnimation: true,
      })
    })
  }

  render() {
    const { didFinishInitialAnimation } = this.state
    return didFinishInitialAnimation ? (
      <User
        renderWithUser={() => <MyJourneyScreenComponent />}
        renderWithAnonymous={() => <MyJourneyScreenComponent />}
        renderWithAuthenticating={() => <DefaultIndicator size="large" />}
        renderWithUndetermined={() => <DefaultIndicator size="large" />}
      />
    ) : (
      <DefaultIndicator size="large" />
    )
  }
}

export default MyJourneyScreenContainer
