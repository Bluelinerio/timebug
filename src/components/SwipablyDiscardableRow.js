import React, { Component } from 'react'
import { StyleSheet }       from 'react-native'
import { RectButton }       from 'react-native-gesture-handler'
import Swipeable            from 'react-native-gesture-handler/Swipeable'

export default class SwipablyDiscardableRow extends Component<{
  children: React.Node,
  onClose: () => void,
}> {
  close = () => this._swipeableRow.close()
  render() {
    const { children, onClose } = this.props
    return (
      <Swipeable
        ref={c => (this._swipeableRow = c)}
        friction={2}
        leftThreshold={80}
        rightThreshold={40}
        renderRightActions={() => (
          <RectButton style={styles.rightAction} onPress={onClose} />
        )}
        renderLeftActions={() => (
          <RectButton style={styles.rightAction} onPress={onClose} />
        )}
        onSwipeableRightOpen={onClose}
        onSwipeableLeftOpen={onClose}
      >
        {children}
      </Swipeable>
    )
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
