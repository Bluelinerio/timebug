//@flow
import React                  from 'react'
import InteractionManager     from '../../utils/InteractionManager'
import CheckinScreenContainer from './containers/CheckinScreenContainer'
import User                   from '../../containers/User'
import DefaultIndicator       from '../../components/DefaultIndicator'

class CheckinScreen extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      didFinishInitialAnimation: false
    }
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        didFinishInitialAnimation: true
      })
    })
  }

  render() {
    const { didFinishInitialAnimation } = this.state
    return didFinishInitialAnimation ? (
      <User
        renderWithUser={() => <CheckinScreenContainer />}
        renderWithAnonymous={() => <CheckinScreenContainer />}
        renderWithAuthenticating={() => <DefaultIndicator size="large" />}
        renderWithUndetermined={() => <DefaultIndicator size="large" />}
      />
    ) : (
      <DefaultIndicator size="large" />
    )
  }
}

export default CheckinScreen
