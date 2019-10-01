// @flow
import React, { memo, useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Text from '2020_components/Text'
import { StyleContext } from '../../context/StyleContext'
import styles from '../styles'

type Props = {
  onPress: () => void,
  selected?: boolean,
  text: string,
  style?: any,
  color: string,
}

const TabBarButton = (props: Props) => {
  const { text, onPress, selected, style = {} } = props
  const { color } = useContext(StyleContext)
  return (
    <TouchableOpacity
      style={[styles.tab, style]}
      onPress={onPress}
      disabled={selected}
    >
      <Text style={[styles.tabText, selected ? { color } : null]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default memo(TabBarButton)
