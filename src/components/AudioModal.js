import React from 'react'
import {
  View,
  Modal,
  TouchableOpacity,
  StatusBar,
  Text,
  Image
} from 'react-native'
import Gradient from '../components/Gradient'
import styles, {
  statusBarColor,
  closeButtonColor,
  closeButtonSize,
  gradientColors
} from '../styles/components/AudioModal'
import { icon } from '../resources/images'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

import tron from 'reactotron-react-native'

export type AudioModalProps = {
  isOpen: boolean,
  title: string,
  snippet: string,
  close: () => any
}

export const key = 'Audio'

const AudioModal = (props: AudioModalProps) => {
  const { isOpen, close, title } = props
  tron.log('Rendered Audio Modal')
  tron.log(props)
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        close()
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={statusBarColor} />
      <View style={styles.modalContainer}>
        <Gradient colors={gradientColors} style={styles.modal}>
          <View style={styles.modalHeader}>
            <View style={[styles.headerBlock, styles.iconBlock]}>
              <TouchableOpacity
                onPress={close}
                style={styles.closeButtonContainer}
              >
                <Icon
                  name={'close'}
                  color={closeButtonColor}
                  size={closeButtonSize}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.title}>
            {title}
          </Text>
          <View style={styles.headerBlock}>
            <Image style={[styles.headerIcon]} source={icon} />
          </View>
        </Gradient>
      </View>
    </Modal>
  )
}

export default AudioModal
