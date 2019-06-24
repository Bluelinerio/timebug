//@flow

/**
 * Deprecated
 */
import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import LoginButtonContainer from '../containers/LoginButtonContainer';
import Gradient from '../components/Gradient';
import styles, {
  statusBarColor,
  closeButtonColor,
  closeButtonSize,
  gradientColors,
} from '../styles/components/LoginModal';
import { icon } from '../resources/images';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export type LoginModalProps = {
  isOpen: boolean,
  close: () => any,
};

export const key = 'Login';

const innerText = `Login to enjoy the app at it's fullest and live the journey through the seven pillars of life!`;

const LoginModal = (props: LoginModalProps) => {
  const { isOpen, close } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        close();
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
          <View style={styles.headerBlock}>
            <Image style={[styles.headerIcon]} source={icon} />
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.text}>{innerText}</Text>
          </View>
          <LoginButtonContainer onPress={close} />
        </Gradient>
      </View>
    </Modal>
  );
};

export default LoginModal;
