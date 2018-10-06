import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles                           from '../styles'

type ScreenLockedComponentProps = {
  onPress: (step: any) => any,
  step: any
}

class ScreenLockedComponent extends React.PureComponent<
  ScreenLockedComponentProps
> {
  _onPress = () => {
    const { step, onPress } = this.props
    onPress(step)
  }

  render() {
    return (
      <View style={[styles.container, styles.screenLockedContainer]}>
        <Text style={[styles.lockedTitle, styles.text]}>
          To use this tool, you must have completed step 5 with at least one
          goal
        </Text>
        <TouchableOpacity style={styles.button} onPress={this._onPress}>
          <Text style={[styles.text, styles.buttonText]}>Go to step 5</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ScreenLockedComponent
