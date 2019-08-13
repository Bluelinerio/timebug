// @flow
import React, { memo } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../styles'

type Props = {
  onPress: () => void,
  selected?: boolean,
  text: string,
  style?: any
}

const TabBarButton = (props: Props) => {
  const { text, onPress, selected, style = {} } = props
  return (
    <TouchableOpacity style={[styles.tab, selected ? styles.selectedTab : {}, style]} onPress={onPress} disabled={selected} >
      <Text style={[styles.tabText]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default memo(TabBarButton)
