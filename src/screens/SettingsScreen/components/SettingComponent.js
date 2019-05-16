// @flow
import React                  from 'react'
import { View, Text, Switch } from 'react-native'
import styles                 from '../styles'

type Props = {
  text: string,
  value: boolean,
  onSwitch: boolean => void,
}

class SettingComponent extends React.PureComponent<Props> {
  _onValueChange = (value: boolean) => {
    const { onSwitch } = this.props
    onSwitch(value)
  }

  render() {
    const { text, value } = this.props
    return (
      <View style={[styles.genericRow, styles.settingRow]}>
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingText}>{text}</Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch value={value} onValueChange={this._onValueChange} />
        </View>
      </View>
    )
  }
}

export default SettingComponent
