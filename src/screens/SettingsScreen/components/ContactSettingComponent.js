// @flow
import React from 'react'
import { View, Text, Switch } from 'react-native'
import styles from '../styles'

type Props = {
  text: string,
  value: boolean,
  onSwitch: boolean => void,
}

const PENDING = 'PENDING'
const CONFIRMED = 'CONFIRMED'

class SettingComponent extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
      status: CONFIRMED,
    }
  }

  timeout = null

  startTimeout = (oldValue: boolean) => {
    this.timeout = setTimeout(() => {
      this.setState({ value: oldValue, status: CONFIRMED })
    }, 2500)
  }

  stopTimeout = () => {
    if (this.timeout) clearTimeout(this.timeout)
  }

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.props
    const { value: oldValue } = prevProps
    if (value !== oldValue) {
      this.stopTimeout()
      this.setState({ value, status: CONFIRMED })
    }
    if (
      value === oldValue &&
      prevState.value !== this.state.value &&
      this.state.status === PENDING
    ) {
      this.startTimeout(prevState.value)
    }
  }

  _onValueChange = (value: boolean) => {
    const { onSwitch } = this.props
    this.setState({ value, status: PENDING }, () => onSwitch(this.state.value))
  }

  render() {
    const { text } = this.props
    const { value } = this.state
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
