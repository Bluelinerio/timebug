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

type CheckinElementProps = {
  text: string,
  title: string,
  lastCheckin: string,
  frequency: DAILY | WEEKLY | MONTHLY | BIWEEKLY,
  onPress: () => any
}

const style = {
  checkinElementContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  topContainer: {
    flex: 1
  },
  bottomContainer: {
    flex: 2
  },
  titleContainer: {
    flex: 2
  },
  nextCheckinContainer: {
    flex: 1
  },
  frequencyContainer: {
    flex: 1
  }
}

const operateCheckinDate = (frequency, lastCheckin) => {
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
    const { text, title, lastCheckin, frequency, onPress } = this.props
    const { frequency: localFrequency } = this.state
    return (
      <View
        style={{
          flex: 1,
          padding: 8,
          backgroundColor: '#EEEEEE',
          marginVertical: 10
        }}
      >
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1 }}>
              <Text>{title}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={[{ flex: 1 }]}>
                <Text
                  style={frequency !== localFrequency ? { color: 'green' } : {}}
                >
                  {operateCheckinDate(localFrequency, lastCheckin)}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Picker
              selectedValue={localFrequency}
              style={{ width: 150, height: 50 }}
              itemStyle={{ fontSize: 8, color: 'green' }}
              onValueChange={value => this.setState({ frequency: value })}
            >
              {Object.keys(frequencies).map(key => {
                const frequency = frequencies[key]
                return (
                  <Picker.Item style={{ color: 'red' }} key={key} label={frequency} value={frequency} />
                )
              })}
            </Picker>
          </View>
          <TouchableOpacity
            onPress={onPress}
            style={[
              { flex: 1 },
              frequency !== localFrequency
                ? { backgroundColor: 'blue' }
                : { backgroundColor: 'gray' }
            ]}
          >
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text>{text}</Text>
        </View>
      </View>
    )
  }
}

export default CheckinElement
