// @flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles                           from '../styles'

export type Props = {
  title: string,
  text: string,
  link?: string,
  onLinkPress?: () => void,
}

class CheckinComponent extends React.PureComponent<Props> {
  render() {
    const { title, text, link } = this.props
    return (
      <View style={styles.checkinContainer}>
        <Text style={styles.checkinTitle}>{title}</Text>
        <Text style={styles.checkinText}>{text}</Text>
        {link && (
          <TouchableOpacity onPress={this.props.onLinkPress}>
            <Text style={styles.link}>{link}</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

export default CheckinComponent
