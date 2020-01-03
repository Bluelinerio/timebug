import React, { useState, useCallback } from 'react'
import { View, Text, Modal, Image, TouchableOpacity, ImageBackground } from 'react-native'
import styles, { gradientColors } from '../styles/components/GreetingModal'
import src from '../resources/images/Timebug-hourglass-1.png'
import Icon from 'react-native-vector-icons/Ionicons'
import Gradient from './Gradient';

const GreetingModal = () => {
  const [open, setOpen] = useState(true)

  const requestClose = useCallback(
    () => {
      setOpen(false)
    },
    [setOpen]
  )

  return (
    <Modal animationType="slide" transparent={false} visible={open}>
      <Gradient colors={gradientColors} style={styles.greetingModalContainer}>
        <View style={styles.backButtonRow}>
          <TouchableOpacity onPress={requestClose}>
            <Icon name={'ios-close-circle-outline'} size={40} color={'black'} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            YOUR TIME IS YOUR ENERGY IS YOUR LIFE. USE IT WISELY
          </Text>
          <Text style={styles.body}>
            You are what you spend your time on. Optimize your 'Energetic Investments' in a way that is in sync with your vision. One of the keys here 
            is minimizing distractions which eat up chunks of time that could have
            been highly productive, but otherwise get lost in the hourglass of time which you can never get back.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={src} />
        </View>
      </Gradient>
    </Modal>
  )
}

export default React.memo(GreetingModal)
