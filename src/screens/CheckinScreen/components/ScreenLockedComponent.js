import React          from 'react'
import { View, Text } from 'react-native'
import styles         from '../styles'

type ScreenLockedComponentProps = {
  text?: string,
}

class ScreenLockedComponent extends React.PureComponent<
  ScreenLockedComponentProps
> {
  render() {
    const { text } = this.props
    return (
      <View style={[styles.container, styles.screenLockedContainer]}>
        <Text style={[styles.lockedTitle, styles.text, styles.notice]}>
          {text}
        </Text>
      </View>
    )
  }
}

export default ScreenLockedComponent
