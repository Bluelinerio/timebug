import React                from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles               from '../styles'

export type Props = {
  icons: {
    [x: string]: string,
  },
  iconStyle: any,
  videoStatus: string,
  handle: () => any,
}

class MeditationTimerIcon extends React.PureComponent<Props> {
  _onPress = () => {
    const { handle } = this.props
    handle()
  }

  render() {
    const { iconStyle, icons, videoStatus } = this.props
    return (
      <TouchableOpacity style={[styles.helperButton]} onPress={this._onPress}>
        <Icon name={icons[videoStatus]} {...iconStyle} />
      </TouchableOpacity>
    )
  }
}

export default MeditationTimerIcon
