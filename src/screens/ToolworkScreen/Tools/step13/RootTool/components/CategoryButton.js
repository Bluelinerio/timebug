// @flow
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

type Props = {
  onPress: () => void,
  category: string,
  categoryKey: string
}

class CategoryButton extends React.PureComponent<Props> {
  _onPress = () => {
    const { onPress } = this.props
    onPress()
  }

  render() {
    const { category } = this.props
    return (
      <TouchableOpacity onPress={this._onPress}>
        <Text>{category}</Text>
      </TouchableOpacity>
    )
  }
}

export default CategoryButton
