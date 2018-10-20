//@flow
import React from 'react'
import { View, Text, Switch } from 'react-native'
import styles, { stylesStep1 } from '../../../../styles'
import tron from 'reactotron-react-native'

const MeditationCheckinComponent = (props) => {
  tron.log(props)
  const { model: { fields } } = props
  const thisField = fields.meditatedToday
  const { key, options, meta } = thisField
  return (
    <View style={[styles.container, stylesStep1.formContainer]}>
      <View>
        <Text style={stylesStep1.caption}> {options.header || 'Did you exercise today?'}</Text>
      </View>
      <View style={stylesStep1.switchContainer}>
        <Text style={stylesStep1.yesNoHint}>No</Text>
        <Switch />
        <Text style={stylesStep1.yesNoHint}>Yes</Text>
      </View>
    </View>
  )
}

export default MeditationCheckinComponent
