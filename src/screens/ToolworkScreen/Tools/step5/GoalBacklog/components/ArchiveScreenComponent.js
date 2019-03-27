// @flow
import React                     from 'react'
import { View, ScrollView }      from 'react-native'
import Header                    from './Header'
import ArchiveContent            from './ArchiveContent'
import { SECTIONS }              from '../constants'
import type { GoalWithToolData } from '../../common/types'
import styles                    from '../../common/styles'

type Props = {
  navigation: any,
  tool: { subtitle: string },
  storeAwardData: (any, any) => any,
  data: { value: boolean, _id?: string, date?: string },
  openGoalsScreen: () => any,
  goals: Array<any>,
}

class ArchiveScreenComponent extends React.PureComponent<Props> {
  state = {
    section: SECTIONS.COMPLETED,
    goal: null,
  }

  // _backHandlerSubscription

  // constructor(props) {
  //   super(props)
  //   this._backHandlerSubscription = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     this.onBackButtonPressAndroid
  //   )
  // }

  // componentWillUnmount() {
  //   this._backHandlerSubscription && this._backHandlerSubscription.remove()
  // }

  // onBackButtonPressAndroid = () => {
  //   const { openGoalsScreen } = this.props
  //   openGoalsScreen()
  //   return true
  // }

  _onBackPress = () => {
    const { openGoalsScreen } = this.props
    openGoalsScreen()
  }

  setCompletedSection = () => {
    this.setState(() => ({ section: SECTIONS.COMPLETED }))
  }

  setBacklogSection = () => {
    this.setState(() => ({ section: SECTIONS.BACKLOG }))
  }

  setGoal = (goal: GoalWithToolData) => {
    this.setState(() => ({ goal }))
  }

  unsetGoal = () => {
    this.setState(() => ({ goal: null }))
  }

  render() {
    const { section, goal } = this.state
    const { goals, data, tool, storeAwardData } = this.props
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView}
      >
        <Header
          onBack={this._onBackPress}
          display={true}
          setCompletedSection={this.setCompletedSection}
          setBacklogSection={this.setBacklogSection}
          selectedSection={section}
        />
        <View
          style={[
            styles.container,
            styles.prototypeBackground,
            styles.goalScreenViewContainer,
            styles.padded,
          ]}
        >
          <ArchiveContent
            selectedSection={section}
            goals={goals}
            setGoal={this.setGoal}
            unsetGoal={this.unsetGoal}
            selectedGoal={goal}
            data={data}
            tool={tool}
            storeAwardData={storeAwardData}
          />
        </View>
      </ScrollView>
    )
  }
}

export default ArchiveScreenComponent
