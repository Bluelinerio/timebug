import React                      from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon                       from 'react-native-vector-icons/Ionicons'
import styles                     from '../styles'

export type Props = {
  color: string,
  icon: string,
  handle: () => any,
}

class MeditationTimer extends React.PureComponent<Props> {
  _onPress = () => {
    const { handle } = this.props
    handle()
  }

  render() {
    const { color, icon } = this.props
    return (
      <View style={[styles.container, styles.iconArea]}>
        <TouchableOpacity
          style={[styles.icon, { backgroundColor: color }]}
          onPress={this._onPress}
        >
          <Icon color={'#FAFAFA'} size={26} name={icon} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default MeditationTimer
