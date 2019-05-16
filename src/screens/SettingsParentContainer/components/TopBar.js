// @flow
import React                            from 'react'
import Icon                             from 'react-native-vector-icons/Ionicons'
import { View, Text, TouchableOpacity } from 'react-native'
import styles, { iconSize, iconColor }  from '../styles'

type Props = {
  onPress: () => void,
}

class TopBar extends React.PureComponent<Props> {
  render() {
    const { onPress } = this.props
    return (
      <View style={styles.navigationBar}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onPress}>
            <Icon name={'ios-arrow-back'} size={iconSize} color={iconColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>App settings</Text>
        </View>
      </View>
    )
  }
}

export default TopBar
