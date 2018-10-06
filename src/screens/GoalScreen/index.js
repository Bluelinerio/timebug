//@flow
import React                  from 'react'
import InteractionManager     from '../../utils/InteractionManager'
import GoalScreenContainer    from './containers/GoalScreenContainer'
import User                   from '../../containers/User'
import DefaultIndicator       from '../../components/DefaultIndicator'
import MissingUserScreen      from '../../components/MissingUserScreen'

class GoalScreen extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      didFinishInitialAnimation: false
    }
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {``
      this.setState({
        didFinishInitialAnimation: true
      })
    })
  }

  render() {
    const { didFinishInitialAnimation } = this.state
    return didFinishInitialAnimation ? (
      <User
        renderWithUser={() => <GoalScreenContainer />}
        renderWithAnonymous={() => <MissingUserScreen />}
        renderWithAuthenticating={() => <DefaultIndicator size="large" />}
        renderWithUndetermined={() => <DefaultIndicator size="large" />}
      />
    ) : (
      <DefaultIndicator size="large" />
    )
  }
}

export default GoalScreen
