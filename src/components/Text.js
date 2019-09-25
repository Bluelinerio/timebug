// @flow
import React from 'react'
import { Text } from 'react-native'
import styles from '../styles/components/Text'

const WrappedText = (props: any) => {
  const { style, ...rest } = props
  return (
    <Text {...rest} style={[styles.text, ...style]}>
      {props.children}
    </Text>
  )
}

export default WrappedText
