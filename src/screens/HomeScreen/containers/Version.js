import React, { PureComponent } from 'react';
import { 
	View,
	Text, 
	ScrollView, 
	TouchableHighlight, 
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default () => (
  <Text style={{
    textAlign:'center',
    fontSize:10
  }}>
  {`version:${DeviceInfo.getVersion()} build:${DeviceInfo.getBuildNumber()} Lifevision © blabsventures 2018`}
  </Text>
)
