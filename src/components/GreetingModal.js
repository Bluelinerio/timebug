import React, { useState, useCallback } from 'react'
import { View, Text, Modal, Image } from 'react-native'
import styles from '../styles/components/GreetingModal'
import src from '../resources/images/Timebug-hourglass-1.png'

const GreetingModal = () => {
  const [open, setOpen] = useState(true)

  const requestClose = useCallback(
    () => {
      setOpen(false)
    },
    [setOpen]
  )

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.modalVisible}
    >
      <View style={styles.greetingModalContainer}>
          <View>
              
          </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            YOUR TIME IS YOUR ENERGY IS YOUR LIFE. USE IT WISELY
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={src} />
        </View>
      </View>
    </Modal>
  )
}

export default GreetingModal
