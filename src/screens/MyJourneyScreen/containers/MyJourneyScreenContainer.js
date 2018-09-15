// @flow
import React                    from 'react'
import { connect }              from 'react-redux'
import InteractionManager       from '../../../utils/InteractionManager'
import DefaultIndicator         from '../../../components/DefaultIndicator'
import MyJourneyScreenComponent from '../components/MyJourneyScreenComponent'

type State = {
  didFinishInitialAnimation: boolean
}

type Props = {
  component: string,
  reward: string
}

const mapStateToProps = (state: any) => {
  const nav = state.nav
  const params = nav.routes[0].routes[2].params
  let component
  let reward
  if (params) {
    component = params.component
    reward = params.params.reward
  }
  return {
    component,
    reward
  }
}

class MyJourneyScreenContainer extends React.Component<Props, State> {
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
    const { component, reward } = this.props
    return didFinishInitialAnimation ? (
      <MyJourneyScreenComponent component={component} reward={reward} />
    ) : (
      <DefaultIndicator size="large" />
    )
  }
}

export default connect(mapStateToProps)(MyJourneyScreenContainer)
