import React                           from 'react'
import { View, TouchableOpacity }      from 'react-native'
import Icon                            from 'react-native-vector-icons/Ionicons'
import styles, { iconSize, iconColor } from '../styles'

type Props = {
  display: boolean,
  onBack: () => any,
}

class SubHeader extends React.PureComponent<Props, any> {
  _onClose = () => {
    const { onBack } = this.props
    onBack()
  }

  render() {
    const { display } = this.props
    if (!display) return null
    return (
      <View style={[styles.container, styles.subHeaderContainer]}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={this._onClose}
        >
          <Icon name={'ios-arrow-back'} size={iconSize} color={iconColor} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default SubHeader
