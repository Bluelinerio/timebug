// @flow
import React                      from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles                     from '../styles'

type Props = {
  reopen: string => any,
}

class ReopenGoalButton extends React.PureComponent<Props> {
  _reopenGoal = () => {
    const { reopen } = this.props
    reopen()
  }

  render() {
    return (
      <TouchableOpacity style={styles.reopenButton} onPress={this._reopenGoal}>
        <Text style={styles.reopenLabel}>Restart Goal</Text>
      </TouchableOpacity>
    )
  }
}

export default ReopenGoalButton
