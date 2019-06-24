// @flow

/**
 * Deprecated, used for prototype
 */
import React          from 'react'
import { View, Text } from 'react-native'
import Icon           from 'react-native-vector-icons/Ionicons'

type TabElementProps = {
  name: string,
  text: string,
  selected: boolean,
}

const TabElement = ({ name, text, selected = false }: TabElementProps) => (
  <View style={{ flex: 1, padding: 4, alignItems: 'center' }}>
    <Icon name={name} size={24} color={selected ? '#4EADFF' : '#636363'} />
    <Text style={{ fontSize: 12, color: selected ? '#4EADFF' : '#636363' }}>
      {text}
    </Text>
  </View>
)
const TabBar = () => (
  <View
    style={{
      height: 50,
      flexDirection: 'row',
      backgroundColor: '#E0F2F1',
      borderTopWidth: 1,
      borderTopColor: '#B2DFDA',
    }}
  >
    <TabElement name={'ios-pin'} text={'Check Ins'} selected={true} />
    <TabElement name={'ios-compass'} text={'My Journey'} />
    <TabElement name={'ios-book'} text={'Workbook'} />
    <TabElement name={'ios-hammer'} text={'My Tools'} />
    <TabElement name={'ios-settings'} text={'Settings'} />
  </View>
)

export default TabBar
