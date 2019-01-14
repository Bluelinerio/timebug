import React                from 'react'
import { TouchableOpacity } from 'react-native'
import Icon                 from 'react-native-vector-icons/Ionicons'
import styles               from '../styles'

export type Props = {
  color: string,
  icon: string,
  onPress: () => any,
}

class MeditationTimerIcon extends React.PureComponent<Props> {
  _onPress = () => {
    const { onPress } = this.props
    onPress()
  }

  render() {
    const { color, icon } = this.props

    return (
      <TouchableOpacity
        style={[styles.icon, { backgroundColor: color }]}
        onPress={this._onPress}
      >
        <Icon
          color={'#FAFAFA'}
          size={60}
          name={icon}
          style={{textAlign: 'center', bottom:5}}
        />
      </TouchableOpacity>
    )
  }
}

export default MeditationTimerIcon
