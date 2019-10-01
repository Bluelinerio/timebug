// @flow
import React, { useCallback, useState } from 'react'
import {
  View,
  Text,
  Switch,
  Picker,
  Platform,
  TouchableOpacity,
} from 'react-native'
import styles from '../styles'
import ModalSelector from 'react-native-modal-selector'

type Props = {
  enabled: boolean,
  value: string,
  toggleNotification: () => void,
  updateCheckin: () => void,
}

const AndroidPicker = (props: any) => {
  const { options = {}, items, onChange, value } = props
  return (
    <View style={[styles.pickerBackground]}>
      <Picker
        selectedValue={value ? value : options.default}
        style={[styles.pickerStyle]}
        onValueChange={onChange}
        itemStyle={[styles.pickerItemStyle]}
      >
        {items &&
          items.map(value => (
            <Picker.Item key={value} value={value} label={value} />
          ))}
      </Picker>
    </View>
  )
}

const IOSPicker = (props: any) => {
  const { items, onChange, value } = props

  const data =
    items && items.length > 0
      ? items.map(value => ({
          key: value,
          label: value,
        }))
      : [{ key: '', label: '-' }]

  const dataElement =
    value && data
      ? data.find(element => element.key === value) || data[0]
      : data[0]

  const textValue = dataElement.label

  return (
    data && (
      <View style={styles.pickerStyle}>
        <ModalSelector
          initValue={textValue}
          selectTextStyle={styles.iosSelectorText}
          data={data}
          onChange={element => onChange(element.key)}
        />
      </View>
    )
  )
}

const hours = Array(24)
  .fill(0)
  .map((v, i) => `${i < 10 ? `0${i}` : `${i}`}:00`)

const Settings = (props: Props) => {
  const { enabled, toggleNotification, updateCheckin, value } = props
  const [hour, selectHour] = useState(value)

  const onChangeSelector = useCallback(
    (value: string) => {
      selectHour(value)
    },
    [hour, selectHour]
  )

  const update = useCallback(
    () => {
      updateCheckin(hour)
    },
    [updateCheckin, hour]
  )

  const onSwitchChange = useCallback(
    () => {
      toggleNotification()
    },
    [enabled]
  )

  return (
    <View style={[styles.container, styles.settingsContainer]}>
      <Text style={styles.settingsTitle}>Tool settings</Text>
      <View style={styles.setting}>
        <View style={styles.dreamNotificationTooltip}>
          <Text style={styles.settingText}>Enable dream journal notification</Text>
        </View>
        <View style={styles.dreamNotificationSwitch}>
          <Switch onValueChange={onSwitchChange} value={enabled} />
        </View>
      </View>
      {enabled ? (
        <View style={[styles.setting, { flexDirection: 'column' }]}>
          <View style={[styles.setting, { flexDirection: 'column' }]}>
            <View style={[styles.container, styles.textContainer]}>
              <Text style={[styles.settingText]}>
                At what time would you like to be reminded?
              </Text>
            </View>
            <View style={styles.pickerContainer}>
              {Platform.OS === 'ios' ? (
                <IOSPicker
                  value={hour}
                  items={hours}
                  onChange={onChangeSelector}
                />
              ) : (
                <AndroidPicker
                  value={hour}
                  items={hours}
                  onChange={onChangeSelector}
                />
              )}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.saveButton,
                hour === value ? styles.disabledButton : {},
              ]}
              disable={hour === value}
              onPress={update}
            >
              <Text
                style={[
                  styles.buttonText,
                  hour === value ? styles.disabledButtonText : {},
                ]}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  )
}

export default Settings
