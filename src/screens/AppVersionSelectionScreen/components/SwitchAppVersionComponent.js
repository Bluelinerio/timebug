import React from 'react'
import { View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import styles, { checkboxColor, uncheckedColor } from '../styles'

type SwitchAppVersionProps = {
  checked: boolean,
  version: string,
  toggleVersion: string => any,
}

class SwitchAppVersion extends React.PureComponent<SwitchAppVersionProps> {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }

  _onPress = () => {
    const { checked } = this.state
    const { toggleVersion } = this.props
    this.setState({ checked: !checked }, () => {
      toggleVersion(this.state.checked)
    })
  }

  render() {
    const { checked } = this.state
    return (
      <View style={styles.checkBoxContainer}>
        <CheckBox
          iconType="ionicon"
          checkedIcon="ios-checkbox"
          uncheckedIcon="ios-checkbox-outline"
          checkedColor={checkboxColor}
          uncheckedColor={uncheckedColor}
          checked={checked}
          title={'Use version 2'}
          onIconPress={this._onPress}
          onPress={this._onPress}
          containerStyle={{ backgroundColor: 'transparent' }}
        />
      </View>
    )
  }
}

export default SwitchAppVersion
