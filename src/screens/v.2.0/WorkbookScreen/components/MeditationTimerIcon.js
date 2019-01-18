import React                from 'react'
import { TouchableOpacity } from 'react-native'
import Icon                 from 'react-native-vector-icons/Ionicons'
import styles               from '../styles'

export type Props = {
  color: string,
  icon: string,
  onPress: () => any,
  style: any,
}

class MeditationTimerIcon extends React.PureComponent<Props> {
  _onPress = () => {
    const { onPress } = this.props
    onPress()
  }

  render() {
    const { color, icon, style } = this.props

    return (
      <TouchableOpacity
        style={[styles.icon, style, { backgroundColor: color }]}
        onPress={this._onPress}
      >
        <Icon
          color={'#FAFAFA'}
          size={70}
          name={icon}
          style={{textAlign: 'center'}}
        />
      </TouchableOpacity>
    )
  }
}

export default MeditationTimerIcon
