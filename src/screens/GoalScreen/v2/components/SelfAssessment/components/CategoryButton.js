// @flow
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../styles'

type Props = {
  onPress: () => void,
  category: string,
}

class CategoryButton extends React.PureComponent<Props> {
  _onPress = () => {
    const { onPress } = this.props
    onPress()
  }

  render() {
    const { category } = this.props
    return (
      <TouchableOpacity style={styles.categoryButton} onPress={this._onPress}>
        <Text style={styles.categoryButtonText}>{category}</Text>
      </TouchableOpacity>
    )
  }
}

export default CategoryButton
