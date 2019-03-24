// @flow
import React                      from 'react'
import { View, ScrollView, Text } from 'react-native'
import Header                     from './Header'
import { SECTIONS }               from '../constants'
import styles                     from '../../common/styles'

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

  render() {
    const { section } = this.state
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
          <Text>HIIIIIIIIIIIIIIIIIIIIIIII</Text>
        </View>
      </ScrollView>
    )
  }
}

export default ArchiveScreenComponent
