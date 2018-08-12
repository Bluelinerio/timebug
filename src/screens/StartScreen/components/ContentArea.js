//@flow
import React from 'react'
import { View } from 'react-native'

import OptionsButton, { OptionButtonProps } from './OptionButton'
import styles from '../styles'

type ContentAreaProps = {
  buttons: Array<OptionButtonProps>
}

const ContentArea = ({ buttons }: ContentAreaProps) => {
  return (
    <View style={[styles.container, styles.content]}>
      {buttons &&
        buttons.map(button => <OptionsButton key={button.text} {...button} />)}
    </View>
  )
}

export default ContentArea
