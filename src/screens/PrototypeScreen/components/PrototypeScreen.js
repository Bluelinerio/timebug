import React from 'react'
import { View, Text } from 'react-native'
import tron from 'reactotron-react-native'

class PrototypeScreen extends React.PureComponent {
  render() {
    tron.log(this.props)
    return (
      <View>
        <Text>This is a prototype</Text>
      </View>
    )
  }
}

export default PrototypeScreen