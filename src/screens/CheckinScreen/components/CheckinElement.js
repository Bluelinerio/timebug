//@flow
import React                                    from 'react'
import { View, Text, Picker, TouchableOpacity } from 'react-native'
import {
  frequencies,
  DAILY,
  WEEKLY,
  BIWEEKLY,
  MONTHLY
}                                               from '../../../services/checkins'
import moment                                   from 'moment'
import styles                                   from '../styles'

export type CheckinElementProps = {
  text: string,
  title: string,
  lastCheckin: string,
  nextCheckin: string,
  frequency: DAILY | WEEKLY | MONTHLY | BIWEEKLY,
  step: string,
  message: string,
  onPress: () => any,
  onLink: () => any
}

const operateWithLastCheckin = (frequency: string, lastCheckin: string) => {
  const lastCheckinMoment = moment(lastCheckin)
  switch (frequency) {
    case frequencies[DAILY]:
      return lastCheckinMoment.add(1, 'd').format('MM-DD-YY')
    case frequencies[WEEKLY]:
      return lastCheckinMoment.add(1, 'w').format('MM-DD-YY')
    case frequencies[BIWEEKLY]:
      return lastCheckinMoment
        .add(3, 'd')
        .add('12', 'h')
        .format('MM-DD-YY')
    case frequencies[MONTHLY]:
      return lastCheckinMoment.add(1, 'M').format('MM-DD-YY')
  }
}

const operateCheckinDate = (
  frequency: string,
  lastCheckin: string | null = null
) => {
  if (lastCheckin) return operateWithLastCheckin(frequency, lastCheckin)
  switch (frequency) {
    case frequencies[DAILY]:
      return moment()
        .add(1, 'd')
        .format('MM-DD-YY')
    case frequencies[WEEKLY]:
      return moment()
        .add(1, 'w')
        .format('MM-DD-YY')
    case frequencies[BIWEEKLY]:
      return moment()
        .add(3, 'd')
        .add('12', 'h')
        .format('MM-DD-YY')
    case frequencies[MONTHLY]:
      return moment()
        .add(1, 'M')
        .format('MM-DD-YY')
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
    const {
      text,
      title,
      lastCheckin,
      frequency,
      onPress,
      onLink,
      step,
      message
    } = this.props
    const { frequency: localFrequency } = this.state
    return (
      <View style={styles.checkinContainer}>
        <View style={styles.checkinTopContainer}>
          <TouchableOpacity
            style={[styles.titleContainer, styles.button]}
            onPress={onLink}
          >
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
          <View style={styles.centeredContainer}>
            <Text
              style={[
                styles.date,
                frequency !== localFrequency ? styles.changedDate : {}
              ]}
            >
              {operateCheckinDate(localFrequency, lastCheckin)}
            </Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
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
                  <Picker.Item key={key} label={frequency} value={frequency} />
                )
              })}
            </Picker>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                onPress({ step, frequency: localFrequency, message })
              }
              disabled={frequency === localFrequency}
              style={[styles.centeredContainer]}
            >
              <Text
                style={[
                  styles.buttonText,
                  frequency !== localFrequency
                    ? styles.saveText
                    : styles.saveTextDisabled
                ]}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default CheckinElement
