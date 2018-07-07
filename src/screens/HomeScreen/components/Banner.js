/* @flow */

import React from 'react'
import { Image, Text, View } from 'react-native'
import VerticalGradient from './VerticalGradient'
import UserProfileImageConsumer from '../../../containers/UserProfileImageConsumer'
import LogoutButtonContainer from '../../../containers/LogoutButtonContainer'
import styles from '../../styles/dashboard.styles'
import moment from 'moment'
import ResetStepsButton from './ResetStepsButton'
import DisplayStepsContainer from './../containers/DisplayStepsContainer';

const Banner = () => {
  return (
    <View>
      <VerticalGradient />
      <View style={styles.header}>
        <View>
          <Text style={styles.headerDate}>
            {moment()
              .format('dddd DD MMM')
              .toUpperCase()}
          </Text>
          <Text style={[styles.title, styles.strong]}>{`Welcome`}</Text>
        </View>
        <LogoutButtonContainer>
          <UserProfileImageConsumer>
            {source => <Image source={source} style={styles.headerAvatar} />}
          </UserProfileImageConsumer>
        </LogoutButtonContainer>
    </View>
    {
      (__DEV__) &&
            <View style={{ padding: 15 }}>
              <ResetStepsButton />
              <DisplayStepsContainer />
            </View>
    }
  </View>
  )
}

export default Banner
