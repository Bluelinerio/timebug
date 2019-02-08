import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles, { iconColor } from '../styles'

type Props = {
  children: React.node<any>,
  onBack: () => any,
}

class SubHeader extends React.PureComponent<Props> {
  render() {
    const { onBack } = this.props
    return (
      <View style={[styles.container, styles.advisorSyncHeader]}>
        <View style={styles.buttonHeaderArea}>
          <TouchableOpacity style={styles.buttonContainer} onPress={onBack}>
            <Icon name={'ios-arrow-back'} size={24} color={iconColor} />
          </TouchableOpacity>
        </View>
        {this.props.children}
      </View>
    )
  }
}

export default SubHeader
