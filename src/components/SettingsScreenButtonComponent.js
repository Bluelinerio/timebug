// @flow
import React                      from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon                       from 'react-native-vector-icons/Ionicons'
import { darkBlue }               from '2020_constants/colors'
import styles                     from '2020_styles/components/SettingsIcon'

type Props = {
  size?: number,
  color?: string,
  goToSettings: () => void,
}

class SettingsScreenButtonComponent extends React.PureComponent<Props> {
  render() {
    const { size = 30, color = darkBlue, goToSettings } = this.props
    return (
      <View style={styles.settinsIconContainer}>
        <TouchableOpacity onPress={goToSettings}>
          <Icon name={'ios-settings'} size={size} color={color} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default SettingsScreenButtonComponent
