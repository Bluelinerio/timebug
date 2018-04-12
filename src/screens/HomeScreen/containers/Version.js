import React from 'react'
import { Text } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import CodePush from 'react-native-code-push'
//import version from 'react-native-version'

class VersionComponent extends React.Component {
  state = { version: __DEV__ ? 'debug' : 'release' }
  componentDidMount = () =>
    CodePush.getUpdateMetadata().then(update => {
      if (update) {
        this.setState({ version: update.appVersion, codepush: update.label })
      }
    })
  render() {
    return (
      <Text
        style={{
          textAlign: 'center',
          fontSize: 10,
          color: '#ccc',
          marginBottom: 2
        }}
      >
        {`20/20 Lifevision © blabsventures 2018\n Version:${
          this.state.codepush
        }, Native:${DeviceInfo.getVersion()} build:${DeviceInfo.getBuildNumber()} `}
      </Text>
    )
  }
}

export default VersionComponent
