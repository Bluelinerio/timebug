// @flow
import React              from 'react'
import { BackHandler }    from 'react-native'
import { withNavigation } from 'react-navigation'
import BoardScreen        from '../containers/BoardScreen/BoardScreenContainer'
import AdvisorScreen      from '../containers/AdvisorScreen/AdvisorScreenContainer'
import SyncScreen         from '../containers/SyncScreen/SyncScreenContainer'
import ContactScreen      from '../containers/ContactScreen/ContactScreenContainer'

type State = {
  currentView: string,
  params: any,
}

export type Props = {
  step: any,
  tool: any,
  data: any,
  storeAwardData: (value: any, tool: any) => any,
  navigation: any,
}

const views = {
  board: 'board',
  sync: 'sync',
  advisor: 'advisor',
  contact: 'contact',
}

const BoardSwitch = ({
  currentView,
  props,
  ...rest
}: {
  currentView: string,
  props: any,
}) => {
  switch (currentView) {
  case views.board:
    return <BoardScreen {...props} {...rest} />
  case views.advisor:
    return <AdvisorScreen {...props} {...rest} />
  case views.sync:
    return <SyncScreen {...props} {...rest} />
  case views.contact:
    return <ContactScreen {...props} {...rest} />
  default:
    return null
  }
}

class BoardOfAdvisors extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    this.state = { prevState: [], currentView: views.board, params: null }
    this._didFocusSubscription = props.navigation.addListener('didFocus', () =>
      BackHandler.addEventListener(
        'hardwareBackPress',
        this.onBackButtonPressAndroid
      )
    )
  }

  _didFocusSubscription
  _willBlurSubscription

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      () =>
        BackHandler.removeEventListener(
          'hardwareBackPress',
          this.onBackButtonPressAndroid
        )
    )
  }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove()
    this._willBlurSubscription && this._willBlurSubscription.remove()
  }

  onBackButtonPressAndroid = () => {
    const { currentView } = this.state
    if (currentView !== views.board) {
      this._goBack()
      return true
    }
    return false
  }

  _onSoftwareBackButtonPress = () => {
    this.onBackButtonPressAndroid()
  }

  _goBack = () => {
    const { prevState } = this.state
    const arr = [...prevState]
    const { currentView, params } = arr.pop()
    this.setState({ prevState: arr, currentView, params })
  }

  goToBoard = () => {
    this.setState({ prevState: [], currentView: views.board, params: null })
  }

  goToSync = (params: any) => {
    const { prevState, ...rest } = this.state
    const newPrevState = [...prevState, rest]
    this.setState({ prevState: newPrevState, currentView: views.sync, params })
  }

  goToContact = (params: any) => {
    this.setState({ currentView: views.contact, params })
  }

  goToAdvisor = (params: any) => {
    const { prevState, ...rest } = this.state
    const newPrevState = [...prevState, rest]
    this.setState({
      prevState: newPrevState,
      currentView: views.advisor,
      params,
    })
  }

  render() {
    const { currentView, params } = this.state
    const props = {
      ...this.props,
      ...params,
    }
    return (
      <React.Fragment>
        <BoardSwitch
          currentView={currentView}
          props={props}
          goToBoard={this.goToBoard}
          goToAdvisor={this.goToAdvisor}
          goToSync={this.goToSync}
          goToContact={this.goToContact}
          onBack={this._onSoftwareBackButtonPress}
        />
      </React.Fragment>
    )
  }
}

export default withNavigation(BoardOfAdvisors)
