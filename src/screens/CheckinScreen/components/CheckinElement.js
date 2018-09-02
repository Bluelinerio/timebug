import React from 'react'
import { View, Text, Picker, TouchableOpacity, StyleSheet } from 'react-native'
import {
  frequencies,
  DAILY,
  WEEKLY,
  BIWEEKLY,
  MONTHLY
} from '../../../services/checkins'
import moment from 'moment'

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
        style={{
          flex: 1,
          padding: 8,
          paddingHorizontal: 16,
          backgroundColor: '#EEEEEE',
          marginVertical: 10
        }}
      >
        <View style={{ flex: 2, flexDirection: 'row'}}>
          <View style={{ flex: 3, alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 16, color: 'blue', textDecorationLine:'underline' }} onPress={onLink}>{title}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
              style={[{ fontSize: 12 }, frequency !== localFrequency ? { color: 'green' } : {}]}
            >
              {operateCheckinDate(localFrequency, lastCheckin)}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, marginVertical: 12 }}>
          <Text style={{ textAlign: 'justify' }} >{text}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <Picker
              selectedValue={localFrequency}
              style={{ width: 120, height: 30 }}
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
            style={{
              flex: 1
            }}
          >
            <TouchableOpacity
              onPress={frequency !== localFrequency ? onPress : () => null}
              style={[
                { flex: 1, alignItems: 'center', justifyContent: 'center' },
                frequency !== localFrequency
                  ? { backgroundColor: 'blue' }
                  : { backgroundColor: 'gray' }
              ]}
            >
              <Text style={{ color: 'white' }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default CheckinElement
