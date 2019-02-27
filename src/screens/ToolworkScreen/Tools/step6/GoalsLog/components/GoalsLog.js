// @flow
import React                             from 'react'
import { View, BackHandler, ScrollView } from 'react-native'
import styles                            from '../styles'
import SubHeader                         from './SubHeader'
import GoalsList                         from './GoalsList'
import GoalReview                        from '../containers/GoalReviewContainer'
import type { Goal }                     from '../types'

export type Props = {
  tool: { subtitle: string },
  storeAwardData: (any, any) => any,
  data: { value: boolean, _id?: string, date?: string },
  step: any,
  navigation: any,
  goal?: Goal,
  goals: Array<Goal>,
}

type State = {
  selectedGoal: Goal,
}

class GoalsLog extends React.PureComponent<Props, State> {
  _didFocusSubscription
  _willBlurSubscription

  constructor(props) {
    super(props)
    const { goal = null } = props
    this.state = {
      selectedGoal: goal,
    }
    this._didFocusSubscription = props.navigation.addListener('didFocus', () =>
      BackHandler.addEventListener(
        'hardwareBackPress',
        this.onBackButtonPressAndroid
      )
    )
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.goal &&
      this.props.goal._id &&
      (!prevProps.goal || prevProps.goal._id !== this.props.goal._id)
    ) {
      const { goal } = this.props
      this.setState({
        selectedGoal: goal,
      })
    }
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
    const { selectedGoal } = this.state
    const { navigation } = this.props
    if (selectedGoal) {
      this.setState({ selectedGoal: null })
      return true
    }
    navigation.goBack()
    return true
  }

  _onSoftwareBackButtonPress = () => {
    this.onBackButtonPressAndroid()
  }

  _onSelectGoal = goal => {
    this.setState({ selectedGoal: goal })
  }

  _unsetGoal = () => {
    this.setState({ selectedGoal: null })
  }

  render() {
    const { goals, storeAwardData, data, tool } = this.props
    const { selectedGoal } = this.state
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView}
      >
        <SubHeader
          display={!!selectedGoal}
          onBack={this._onSoftwareBackButtonPress}
        />
        {!selectedGoal ? (
          <View style={[styles.container, styles.padded]}>
            <GoalsList goals={goals} setGoal={this._onSelectGoal} />
          </View>
        ) : (
          <View style={[styles.container]}>
            <GoalReview
              toolData={data}
              storeToolData={storeAwardData}
              goal={selectedGoal}
              tool={tool}
              unsetGoal={this._unsetGoal}
            />
          </View>
        )}
      </ScrollView>
    )
  }
}

export default GoalsLog
