// @flow
import React from 'react'
import GoalList from './GoalList'
import { BackHandler } from 'react-native'
import GoalsFromTypeList from '../containers/GoalsFromTypeListContainer'
import GoalReview from '../containers/GoalReviewContainer'

type State = {
  selectedGoaltype: String | null,
  selectedGoal: any | null
}

class GoalScreenContent extends React.PureComponent<any, State> {
  _didFocusSubscription
  _willBlurSubscription

  constructor(props) {
    super(props)
    this.state = {
      selectedGoaltype: null,
      selectedGoal: null
    }
    this._didFocusSubscription = props.navigation.addListener('didFocus', () =>
      BackHandler.addEventListener(
        'hardwareBackPress',
        this.onBackButtonPressAndroid
      )
    )
  }

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
    const { selectedGoaltype, selectedGoal } = this.state
    const { navigation } = this.props
    if (selectedGoal) {
      this.setState({ selectedGoal: null })
      //Animate to the left
      return true
    }
    if (selectedGoaltype) {
      this.setState({ selectedGoaltype: null })
      // Animate to the left
      return true
    }
    navigation.goBack()
    return true
  }

  _onSelectGoaltype = type => {
    this.setState({ selectedGoaltype: type })
  }

  _onSelectGoal = goal => {
    this.setState({ selectedGoal: goal })
  }

  _unsetGoal = () => {
    this.setState({ selectedGoal: null, selectedGoaltype: null })
  }

  render() {
    const { selectedGoaltype, selectedGoal } = this.state
    return (
      <React.Fragment>
        {!selectedGoaltype &&
          !selectedGoal && <GoalList onSelect={this._onSelectGoaltype} />}
        {selectedGoaltype &&
          !selectedGoal && (
            <GoalsFromTypeList
              goal={selectedGoaltype}
              onSelect={this._onSelectGoal}
            />
          )}
        {selectedGoaltype &&
          selectedGoal && (
            <GoalReview
              goal={selectedGoal}
              type={selectedGoaltype}
              unsetGoal={this._unsetGoal}
            />
          )}
      </React.Fragment>
    )
  }
}

export default GoalScreenContent
