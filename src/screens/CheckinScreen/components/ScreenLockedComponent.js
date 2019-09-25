// @flow
import React    from 'react'
import { View } from 'react-native'
import Text     from '2020_components/Text'
import styles   from '../styles'

type ScreenLockedComponentProps = {
  text?: string,
}

class ScreenLockedComponent extends React.PureComponent<
  ScreenLockedComponentProps
> {
  render() {
    const { text } = this.props
    return (
      <View style={[styles.container, styles.screenLockedContainer, styles.metro]}>
        <Text style={[styles.lockedTitle, styles.text, styles.notice]}>
          {text}
        </Text>
      </View>
    )
  }
}

export default ScreenLockedComponent
