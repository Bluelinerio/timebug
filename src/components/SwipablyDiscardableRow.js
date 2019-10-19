import React, { Component } from 'react'
import { StyleSheet }       from 'react-native'

export default class SwipablyDiscardableRow extends Component<{
  children: React.Node,
  onClose: () => void,
}> {
  close = () => this._swipeableRow.close()
  render() {
    const { children, onClose } = this.props
    return null
  }
}

const styles = StyleSheet.create({
  rightAction: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
  },
})
