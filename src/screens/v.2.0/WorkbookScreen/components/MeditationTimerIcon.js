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
          size={70}
          name={icon}
          style={
              ...Platform.select({
                ios: {
                  bottom:5
                  }
                }),

            textAlign: 'center'}
        />
      </TouchableOpacity>
    )
  }
}

export default MeditationTimerIcon
