// @flow
import React                            from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles                           from '../styles'

type Props = {
  openScreen: () => null,
  display: boolean,
}

class GoalArchiveLink extends React.PureComponent<Props> {
  _onPress = () => {
    const { openScreen } = this.props
    openScreen()
  }

  render() {
    const { display } = this.props
    return display ? (
      <View style={styles.goalArchiveLinkContainer}>
        <TouchableOpacity onPress={this._onPress}>
          <Text style={styles.goalArchiveLink}>Open Goals archive</Text>
        </TouchableOpacity>
      </View>
    ) : null
  }
}

export default GoalArchiveLink
