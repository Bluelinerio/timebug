import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { azure } from '../../../constants/colors'

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    padding: 16,
    backgroundColor: azure,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: '#FAFAFA',
    textAlign: 'center'
  }
}

type Props = {
  onPress: () => any,
  text: string
}

class GoToPrototypeButton extends React.PureComponent<Props> {
  render() {
    const { onPress, text } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default GoToPrototypeButton
