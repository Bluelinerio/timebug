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

import AudioVideo from './AudioVideoComponent'
// import Video from 'react-native-video'

import tron from 'reactotron-react-native'

export type AudioModalProps = {
  isOpen: boolean,
  title: string,
  snippet: string,
  audio: string,
  icon:
    | string
    | {
        uri: string
      },
  close: () => any
}

export const key = 'Audio'

const defaultAudio =
  'https://assets.ctfassets.net/6h184bey8vl3/7JQ278WKGsAKcQO4KWWSkI/7a6a37e74821aa780f71dec640c0f14a/test__online-audio-converter.com_.mp3'

class AudioModal extends React.PureComponent<AudioModalProps> {
  render() {
    const { isOpen, close, title, snippet, audio = defaultAudio } = this.props
    tron.log('Rendered Audio Modal')
    tron.log(this.props)
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
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.headerBlock}>
              <Image style={[styles.headerIcon]} source={icon} />
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.text}>{snippet}</Text>
            </View>
            {isOpen &&
              audio && (
                <React.Fragment>
                  <AudioVideo file={audio} />
                </React.Fragment>
              )}
          </Gradient>
        </View>
      </Modal>
    )
  }
}

export default AudioModal
