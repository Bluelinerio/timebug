import React                                     from 'react'
import { View, Modal, Text, TouchableHighlight } from 'react-native'
import LoginButtonContainer                      from '../containers/LoginButtonContainer'
import tron                                      from 'reactotron-react-native'

export type LoginModalProps = {
  isOpen: boolean,
  close: () => any
}

export const key = 'Login'

const LoginModal = (props: LoginModalProps) => {
  const { isOpen, close } = props
  tron.log('Rendered Login Modal')
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        tron.log('closed')
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent'
        }}
      >
        <View style={{ width: 300, height: 300, backgroundColor: 'white', padding: 24 }}>
          <TouchableHighlight
            onPress={close}
            style={{ flex:1, height: 32, flexDirection: 'column', backgroundColor: 'blue', alignSelf: 'center', padding: 26  }}
          >
            <Text>Hide Modal</Text>
          </TouchableHighlight>
          <LoginButtonContainer onPress={close} />
        </View>
      </View>
    </Modal>
  )
}

export default LoginModal
