import React                from 'react'
import { View, ScrollView } from 'react-native'
import styles               from '../styles'
import { SafeAreaView }     from 'react-navigation'
import { BackHandler }      from 'react-native'
import Banner               from '../../../containers/NavigationAwareBanner'
import GoalScreenContent    from '../containers/GoalScreenContentContainer'

type State = {
  selectedGoaltype: String | null,
  selectedGoal: any | null
}

type Props = {
  navigation: any
}

class GoalScreenComponent extends React.PureComponent<Props, State> {
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
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollView}
        >
          <Banner override={this._onSoftwareBackButtonPress}/>
          <View
            style={[
              styles.container,
              styles.prototypeBackground,
              styles.goalScreenViewContainer
            ]}
          >
            <GoalScreenContent
              onSelectGoal={this._onSelectGoal}
              onSelectGoalType={this._onSelectGoaltype}
              unsetGoal={this._unsetGoal}
              selectedGoaltype={selectedGoaltype}
              selectedGoal={selectedGoal}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default GoalScreenComponent
