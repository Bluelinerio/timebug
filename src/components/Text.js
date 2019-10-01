// @flow
import React from 'react'
import { Text } from 'react-native'
import styles from '../styles/components/Text'

const WrappedText = (props: any = {}) => {
  const { style } = props
  const st = Array.isArray(style)
    ? [styles.text, ...style]
    : typeof style === 'object' ? [styles.text, style] : styles.text
  return (
    <Text {...props} style={st}>
      {props.children}
    </Text>
  )
}

export default WrappedText
