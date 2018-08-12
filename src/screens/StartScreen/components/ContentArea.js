import React from 'react'
import { View } from 'react-native'
import tron from 'reactotron-react-native'

import OptionsButton from './OptionButton'
import styles from '../styles'

const ContentArea = ({ buttons }) => {
  return (
    <View style={styles.container}>
      {buttons &&
        buttons.map(button => <OptionsButton key={button.text} {...button} />)}
    </View>
  )
}

export default ContentArea
