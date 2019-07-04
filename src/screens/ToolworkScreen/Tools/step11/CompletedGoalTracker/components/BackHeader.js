// @flow
import React                            from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon                             from 'react-native-vector-icons/Ionicons'
import styles, { backIconColor }        from '../styles'

type Props = {
  onBack: () => any,
}

class BackHeader extends React.PureComponent<Props> {
  _onBackPress = () => {
    const { onBack } = this.props
    onBack()
  }

  render() {
    return (
      <View style={styles.subHeader}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={this._onBackPress}
        >
          <Icon name={'ios-arrow-back'} size={17} color={backIconColor} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default BackHeader
