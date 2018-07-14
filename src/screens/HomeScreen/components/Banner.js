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
import User from './../../../containers/User'

const firstName = user => user && user.name && user.name.split(' ')[0]

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
          <User>
            {
              ({userState}) => {
                  return (<Text style={[styles.bannerTitle, styles.strong]}>{`Welcome${userState ? `, ${firstName(userState)}` : ``}!`}</Text>)
              }
            }
          </User>
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
