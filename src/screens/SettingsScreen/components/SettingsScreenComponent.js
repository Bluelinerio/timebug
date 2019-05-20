// @flow
import React            from 'react'
import { View }         from 'react-native'
import AccountContainer from '../containers/AccountContainer'
import SettingsList     from './SettingsList'
import styles           from '../styles'

class SettingsScreenComponent extends React.PureComponent {
  render() {
    return (
      <View style={[styles.container, styles.background]}>
        <AccountContainer />
        <SettingsList />
      </View>
    )
  }
}

export default SettingsScreenComponent
