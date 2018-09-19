import React                                              from 'react'
import { View, Modal, TouchableOpacity, StatusBar, Text } from 'react-native'
import Gradient                                           from '../components/Gradient'
import styles, {
  statusBarColor,
  closeButtonColor,
  closeButtonSize,
  gradientColors
}                                                         from '../styles/components/AudioModal'
import Icon                                               from 'react-native-vector-icons/dist/MaterialIcons'
import AudioVideo                                         from './AudioVideoComponent'

export type AudioModalProps = {
  isOpen: boolean,
  title: string,
  audio: string,
  icon:
    | string
    | {
        uri: string
      },
  close: () => any
}

export const key = 'Audio'

class AudioModal extends React.PureComponent<AudioModalProps> {
  render() {
    const { isOpen, close, title, audio } = this.props
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
          <TouchableOpacity
            style={styles.modalBackgroundTouchable}
            onPress={close}
          />
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
            {isOpen && audio ? (
              <React.Fragment>
                <AudioVideo file={audio} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <View style={styles.bottomModalContainer}>
                  <Text style={styles.noAudiotext}>
                    No audiotrack is available for this step currently
                  </Text>
                </View>
              </React.Fragment>
            )}
          </Gradient>
        </View>
      </Modal>
    )
  }
}

export default AudioModal
