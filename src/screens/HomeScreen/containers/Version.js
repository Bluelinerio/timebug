import React                                          from 'react'
import { Text }                                       from 'react-native'
import DeviceInfo                                     from 'react-native-device-info'

const VersionComponent = () => (
  <Text
    style={{
      textAlign: 'center',
      fontSize: 10,
      color: '#ccc',
      marginBottom: 2
    }}
  >
    {`20/20 Lifevision © blabsventures 2018\nVersion:${DeviceInfo.getVersion()} build:${DeviceInfo.getBuildNumber()} `}
  </Text>
)

export default VersionComponent