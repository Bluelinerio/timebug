// @flow
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomImage from '2020_components/CustomImage'
import styles from '../styles'

export type Props = {
  title: string,
  text: string,
  link?: string,
  onLinkPress?: () => void,
  source: string,
  formLink?: string,
  onFormLinkPress: () => void,
}

class GoalCheckinComponent extends React.PureComponent<Props> {
  render() {
    const { title, text, link, source, formLink } = this.props
    return (
      <View style={styles.checkinContainer}>
        <View style={styles.checkinTextContainer}>
          <Text style={styles.checkinTitle}>{title}</Text>
          <Text style={styles.checkinText}>{text}</Text>
          {link && (
            <TouchableOpacity onPress={this.props.onLinkPress}>
              <Text style={styles.link}>{link}</Text>
            </TouchableOpacity>
          )}
          {formLink && (
            <TouchableOpacity
              style={styles.goalFormLink}
              onPress={this.props.onFormLinkPress}
            >
              <Text style={styles.link}>{formLink}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.container}>
          {source && <CustomImage style={styles.stepIcon} source={source} />}
        </View>
      </View>
    )
  }
}

export default GoalCheckinComponent
