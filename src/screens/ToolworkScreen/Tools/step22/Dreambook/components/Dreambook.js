// @flow
import React, { useCallback, useState, useMemo } from 'react'
import moment from 'moment'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { DATE_FORMAT } from '2020_constants/constants'
import styles from '../styles'

type Props = {
  text?: string,
  onPress: () => void,
  buttonText?: string,
}

const Dreambook = (props: Props) => {
  const { onPress, text: parentText, buttonText } = props

  const [text, setText] = useState(parentText ? parentText : '')

  const date = useMemo(() => moment().format(DATE_FORMAT), [])

  const onSave = useCallback(
    () => {
      onPress(text)
      setText('')
    },
    [text, onPress]
  )

  return (
    <View style={[styles.container, styles.padded]}>
      <Text style={styles.dreambookTopText}>
        Today is {date}. Write down anything significant from your dreams last night.
      </Text>
      <View style={styles.container}>
        <TextInput
          multiline
          textAlignVertical={'top'}
          onChangeText={setText}
          value={text}
          defaultValue={''}
          numberOfLines={10}
          style={styles.dreambookTextStyle}
        />
      </View>
      <View style={styles.saveButtonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={onSave}>
          <Text style={styles.saveButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Dreambook
