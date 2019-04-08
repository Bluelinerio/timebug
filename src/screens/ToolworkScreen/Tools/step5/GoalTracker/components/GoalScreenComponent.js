// @flow
import React                             from 'react'
import { View, ScrollView, BackHandler } from 'react-native'
import GoalScreenContent                 from './GoalScreenContent'
import SubHeader                         from './SubHeader'
import GoalArchiveLink                   from './GoalArchiveLink'
import styles                            from '../../common/styles'

type State = {
  selectedGoaltype: String | null,
  selectedGoal: any | null,
}

type Props = {
  navigation: any,
  tool: { subtitle: string },
  storeAwardData: (any, any) => any,
  data: { value: boolean, _id?: string, date?: string },
  type?: string,
  goal?: any,
  goalId?: string,
  openArchiveScreen: () => any,
}

class GoalScreenComponent extends React.PureComponent<Props, State> {
  _didFocusSubscription
  _willBlurSubscription

  constructor(props) {
    super(props)
    const { type, goal } = props
    this.state = {
      selectedGoaltype: type,
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
    if (this.props.goalId && prevProps.goalId !== this.props.goalId) {
      const { type, goal } = this.props
      this.setState({
        selectedGoaltype: type,
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

  _onSoftwareBackButtonPress = () => {
    const { selectedGoaltype, selectedGoal } = this.state
    const { navigation } = this.props
    if (selectedGoal) {
      this.setState({ selectedGoal: null })
    } else if (selectedGoaltype) {
      this.setState({ selectedGoaltype: null })
    } else {
      navigation.goBack()
    }
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
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView}
      >
        <SubHeader
          display={!!selectedGoaltype}
          onBack={this._onSoftwareBackButtonPress}
        />
        <View
          style={[
            styles.container,
            styles.prototypeBackground,
            styles.goalScreenViewContainer,
            styles.padded,
          ]}
        >
          <GoalScreenContent
            tool={this.props.tool}
            storeAwardData={this.props.storeAwardData}
            data={this.props.data}
            onSelectGoal={this._onSelectGoal}
            onSelectGoalType={this._onSelectGoaltype}
            unsetGoal={this._unsetGoal}
            selectedGoaltype={selectedGoaltype}
            selectedGoal={selectedGoal}
            onBack={this._onSoftwareBackButtonPress}
          />
        </View>
        <GoalArchiveLink
          display={!selectedGoaltype && !selectedGoal}
          openScreen={this.props.openArchiveScreen}
        />
      </ScrollView>
    )
  }
}

export default GoalScreenComponent
