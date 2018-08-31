// @flow
import React from 'react'
import { View, ScrollView } from 'react-native'
import moment from 'moment'
import CheckinElement from './CheckinElement'
import { frequencies, DAILY } from '../../../services/checkins'
import tron from 'reactotron-react-native'

const test = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corporis mollitia maiores asperiores illum. Expedita beatae similique eos velit, perspiciatis itaque sequi voluptatem sed repellendus cum sint suscipit et non.',
    title: 'Your first checkin!',
    lastCheckin: moment().subtract(2, 'd'),
    frequency: frequencies[DAILY],
    onPress: () => tron.log("pressed")
}

class CheckinScreenComponent extends React.PureComponent<any> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ padding: 16 }}>
            <CheckinElement {...test} />
            <CheckinElement {...test} />
            <CheckinElement {...test} />
            <CheckinElement {...test} />
            <CheckinElement {...test} />
            <CheckinElement {...test} />            
        </ScrollView>     
      </View>
    )
  }
}

export default CheckinScreenComponent
