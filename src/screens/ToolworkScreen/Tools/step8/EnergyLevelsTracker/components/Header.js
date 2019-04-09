// @flow
import React                      from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon                       from 'react-native-vector-icons/Ionicons'
import styles, { iconColor }      from '../styles'

type Props = {
  onBack: () => any,
  display: boolean,
}

class Header extends React.PureComponent<Props> {
  render() {
    const { onBack, display } = this.props
    return display ? (
      <View style={[styles.container, styles.subHeader]}>
        <View style={styles.buttonHeaderArea}>
          <TouchableOpacity onPress={onBack}>
            <Icon name={'ios-arrow-back'} size={24} color={iconColor} />
          </TouchableOpacity>
        </View>
      </View>
    ) : null
  }
}

export default Header
