// @flow
import React          from 'react'
import { View, Text } from 'react-native'

type Props = {
  index: number,
}

class CheckinListElement extends React.PureComponent<Props> {
  render() {
    const { index } = this.props
    return (
      <View>
        <Text>{index}</Text>
      </View>
    )
  }
}

export default CheckinListElement
