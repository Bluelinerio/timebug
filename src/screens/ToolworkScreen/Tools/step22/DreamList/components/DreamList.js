// @flow
import React from 'react'
import { View } from 'react-native'
import { Dream } from '../../context/DreamContext'
import DreamComponent from '../containers/DreamContainer'
import styles from '../styles'

type Props = {
  dreams: Array<Dream>,
}

const DreamList = (props: Props) => {
  const { dreams } = props
  return (
    <View style={[styles.container, styles.padded]}>
      {dreams &&
        dreams.map(dream => {
          return <DreamComponent dream={dream} key={dream.id} />
        })}
    </View>
  )
}

export default DreamList
