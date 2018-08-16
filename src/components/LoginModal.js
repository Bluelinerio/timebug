import React                                     from 'react'
import { View, Modal, Text, TouchableHighlight } from 'react-native'
import LoginWithFbButtonContainer                from '../containers/LoginWithFbButtonContainer'
import tron                                      from 'reactotron-react-native'

export type LoginModalProps = {
  isOpen: boolean,
  close: () => any
}

export const key = 'Login'

const LoginModal = (props: LoginModalProps) => {
  const { isOpen, close } = props
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isOpen}
      onRequestClose={() => {
        tron.log('closed')
      }}
    >
      <View>
        <Text> I AM LIDNSAY LOHAN </Text>
        <TouchableHighlight onPress={close}>
          <Text>Hide Modal</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={close}>
          <LoginWithFbButtonContainer />
        </TouchableHighlight>
      </View>
    </Modal>
  )
}

export default LoginModal
