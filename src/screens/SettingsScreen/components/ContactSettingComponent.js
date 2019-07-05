// @flow
import React                                           from 'react'
import { View, Text, Switch, Alert, TouchableOpacity } from 'react-native'
import styles                                          from '../styles'

type Props = {
  text: string,
  value: boolean,
  onSwitch: boolean => void,
  isPermanentlyLocked: boolean,
  isRequesting: boolean,
  deviceSettingsLink: () => void,
  syncPermissions: () => void,
}

const PENDING = 'PENDING'
const CONFIRMED = 'CONFIRMED'

class SettingComponent extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
      status: PENDING,
    }
  }

  _showAlert = () => {
    Alert.alert(
      'Requesting contact permissions',
      `You have requested to not ask you for contacts permissions again, you may open your device Settings app to enable them. Afterwards restart the app`,
      [
        {
          text: 'Go to settings',
          onPress: () => this._onDeviceSettingsLink(),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]
    )
  }

  componentDidMount = () => {
    const { syncPermissions } = this.props
    syncPermissions()
  }

  componentDidUpdate(prevProps) {
    const { value, isRequesting } = this.props
    const { value: oldValue, isRequesting: oldRequesting } = prevProps
    if (
      (isRequesting === false &&
        oldRequesting === true &&
        this.state.status === PENDING) ||
      value !== oldValue
    ) {
      this.setState({ value, status: CONFIRMED })
    }
  }

  _onDeviceSettingsLink = async () => {
    const { deviceSettingsLink } = this.props
    try {
      await deviceSettingsLink()
    } catch (err) {
      // Fail silently
    }
  }

  _onValueChange = (value: boolean) => {
    const { onSwitch } = this.props
    this.setState({ value, status: PENDING }, () => onSwitch(this.state.value))
  }

  render() {
    const { text, isPermanentlyLocked } = this.props
    const { value } = this.state
    return (
      <View style={[styles.genericRow, styles.settingRow]}>
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingText}>{text}</Text>
        </View>
        {isPermanentlyLocked ? (
          <View style={styles.switchContainer}>
            <TouchableOpacity
              style={styles.enableButton}
              onPress={this._showAlert}
            >
              <Text style={styles.enableText}>Enable</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.switchContainer}>
            <Switch value={value} onValueChange={this._onValueChange} />
          </View>
        )}
      </View>
    )
  }
}

export default SettingComponent
