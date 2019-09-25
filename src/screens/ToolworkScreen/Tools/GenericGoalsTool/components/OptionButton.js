// @flow
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Text from '2020_components/Text'
import styles from '../styles'

type Props = {
  onPress: () => void,
  text: string,
  style: {
    text: any,
    button: any,
  },
}

class OptionButton extends React.PureComponent<Props> {
  onPress = () => {
    const { onPress } = this.props
    if (onPress) onPress()
  }

  render() {
    const { text, style = {} } = this.props
    return (
      <TouchableOpacity style={[styles.button, style.button]} onPress={this.onPress}>
        <Text style={[styles.buttonText, style.text]}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

export default OptionButton
