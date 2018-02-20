import * as React from 'react';
import {
  Platform,
  Alert,
  Linking
} from 'react-native'
import DeviceInfo from 'react-native-device-info';
import Error from '../components/Error';
import { timeout } from 'async';
//import { version } from 'react-native-version';

const versions = {
  updateRequired: {
    android: {
      buildNumber: '30', //versionCode
      version: '1.4.0' // versionName
    },
    iOS: {
      buildNumber: '3', //CFBundleVersion
      version: '1.1.1' // CFBundleShortVersionString
    }
  }
}
const buildNumber = parseInt(DeviceInfo.getBuildNumber())
const minBuildNumber = Platform.select({
  ios: parseInt(versions.updateRequired.iOS.buildNumber),
  android: parseInt(versions.updateRequired.android.buildNumber)
})

export const isNativeUpdateRequired = () => buildNumber < minBuildNumber

const sendEmail = ({ email, subject}) => {
  const url = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}`
  return Linking.canOpenURL(url)
    .then(supported => {
      if(!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        Linking.openURL(url)
        .catch(err => {
          if(url.includes('telprompt')) {
            // telprompt was cancelled and Linking openURL method sees this as an error
            // it is not a true error so ignore it to prevent apps crashing
            // see https://github.com/anarchicknight/react-native-communications/issues/39
          } else {
            console.warn('openURL error', err)
          }
        });
      }
    })
    .catch(err => console.warn('An unexpected error happened', err));
}

export class NativeUpdateRequired extends React.Component {
  componentDidMount() {
    Alert.alert(
      'Current version of the App is outdated\nWe have a brand new Version availble. Please Check later for update or email request for the new version.', 
      '', 
      [ 
        {
          text: 'Request an install link',
          onPress: () => {
            const email = 'amos@blabsventures.com';
            const subject = `Lifevision App version update request ${buildNumber}, ${minBuildNumber}`;
            sendEmail({email, subject})
          },
        },
        {
          text: 'OK',
        }
      ]
    )
  }
  render() {
    return (
      <Error 
        title={'App Version is Outdated'}
        message={'A newer version of the app is required.'} 
      />
    )
  }
}
