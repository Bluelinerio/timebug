// @flow
import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../styles'
import Button from '../../../components/Button'

export type Props = {
  title: string,
  buttonTitle: string,
  backgroundColor: string,
  textColor: string,
  buttonOnPress: () => void
}

const WorkbookDoneScreen = ({
  backgroundColor,
  textColor,
  title,
  buttonTitle,
  buttonOnPress
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor
        }
      ]}
    >
      <View style={styles.messageContainer}>
        <Text style={[styles.title, styles.strong, { color: 'white' }]}>
          {title}
        </Text>
      </View>
      <View style={[styles.absoluteContainer]}>
        <Button
          onPress={buttonOnPress}
          text={buttonTitle}
          backgroundColor={'white'}
          textColor={textColor}
        />
      </View>
    </View>
  )
}

export default WorkbookDoneScreen
