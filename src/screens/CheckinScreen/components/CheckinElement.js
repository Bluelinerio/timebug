import React from 'react'
import { View, Text, Picker, TouchableOpacity } from 'react-native'
import {
  frequencies,
  DAILY,
  WEEKLY,
  BIWEEKLY,
  MONTHLY
} from '../../../services/checkins'
import moment from 'moment'

import styles from '../styles'

export type CheckinElementProps = {
  text: string,
  title: string,
  lastCheckin: string,
  frequency: DAILY | WEEKLY | MONTHLY | BIWEEKLY,
  onPress: () => any,
  onLink: () => any
}

const operateCheckinDate = (frequency, lastCheckin) => {
  const lastCheckinMoment = moment(lastCheckin)
  switch (frequency) {
    case frequencies[DAILY]:
      return moment().add(1, 'd').format('MM-DD-YY')
    case frequencies[WEEKLY]:
      return moment().add(1, 'w').format('MM-DD-YY')
    case frequencies[BIWEEKLY]:
      return moment()
        .add(3, 'd')
        .add('12', 'h')
        .format('MM-DD-YY')
    case frequencies[MONTHLY]:
      return moment().add(1, 'M').format('MM-DD-YY')
    default:
      return lastCheckinMoment.format('MM-DD-YY')
  }
}

class CheckinElement extends React.PureComponent<CheckinElementProps> {
  constructor(props) {
    super(props)
    this.state = {
      frequency: props.frequency
    }
  }
  render() {
    const { text, title, lastCheckin, frequency, onPress, onLink } = this.props
    const { frequency: localFrequency } = this.state
    return (
      <View
        style={styles.checkinContainer}
      >
        <View style={styles.checkinTopContainer}>
          <TouchableOpacity style={[styles.titleContainer, styles.button]} onPress={onLink}>
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
          <View style={styles.centeredContainer}>
            <Text
              style={[styles.date, frequency !== localFrequency ? styles.changedDate : {}]}
            >
              {operateCheckinDate(localFrequency, lastCheckin)}
            </Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text} >{text}</Text>
        </View>
        <View style={styles.lowerRowContainer}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={localFrequency}
              style={styles.picker}
              onValueChange={value => this.setState({ frequency: value })}
            >
              {Object.keys(frequencies).map(key => {
                const frequency = frequencies[key]
                return (
                  <Picker.Item
                    key={key}
                    label={frequency}
                    value={frequency}
                  />
                )
              })}
            </Picker>
          </View>
          <View
            style={styles.container}
          >
            <TouchableOpacity
              onPress={onPress}
              disabled={frequency === localFrequency}
              style={[
                styles.centeredContainer,
                styles.button,
                frequency !== localFrequency
                  ? styles.save
                  : styles.saveDisabled
              ]}
            >
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default CheckinElement
