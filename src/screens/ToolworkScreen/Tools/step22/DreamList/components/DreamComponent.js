// @flow
import React, { useState, useCallback } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles, { color, size } from '../styles'

type Props = {
  onBookmark: () => void,
  text: string,
  date: string,
  bookmark: boolean,
}

const DreamComponent = (props: Props) => {
  const { date, text, bookmark, onBookmark } = props
  const chopped = text.length > 40 ? `${text.substr(0, 40)}...` : text
  const [visible, setVisibility] = useState(false)

  const onPress = useCallback(
    () => {
      setVisibility(!visible)
    },
    [visible, setVisibility]
  )

  const extra = bookmark
    ? {
        solid: true,
      }
    : {}

  return (
    <View style={styles.dream}>
      <TouchableOpacity style={styles.dreamToggle} onPress={onPress}>
        <View style={styles.leftBlock}>
          <Text style={styles.dreamDate}>{date}</Text>
          <View style={styles.dreamMainContent}>
            <Text style={styles.dreamChoppedText}>{chopped}</Text>
          </View>
        </View>
        <View style={styles.rightBlock}>
          <TouchableOpacity onPress={onBookmark}>
            <Icon name={'bookmark'} size={size} color={color} {...extra} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {visible && (
        <View style={styles.hiddenView}>
          <Text style={styles.hiddenText}>{text}</Text>
        </View>
      )}
    </View>
  )
}

export default DreamComponent
