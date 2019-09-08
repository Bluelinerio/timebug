// @flow
import React                      from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles                     from '../styles'

type Props = {
  openGoalRecommendations: () => void,
  color: string,
}

class NewGoalButton extends React.PureComponent<Props> {
  _onPress = () => {
    const { openGoalRecommendations } = this.props
    openGoalRecommendations()
  }

  render() {
    const { color } = this.props
    return (
      <TouchableOpacity style={styles.newGoalButton} onPress={this._onPress}>
        <Text style={[styles.newGoalText, { color }]}>New Goal</Text>
      </TouchableOpacity>
    )
  }
}

export default NewGoalButton
