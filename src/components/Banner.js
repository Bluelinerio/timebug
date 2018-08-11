/* @flow */

import React                    from 'react'
import { Text, View }           from 'react-native'
import moment                   from 'moment'
import VerticalGradient         from '../containers/VerticalGradient'
import UserProfileImageConsumer from '../containers/UserProfileImageConsumer'
import styles                   from '../screens/styles/dashboard.styles'
import User                     from '../containers/User'
import UserProfileImage         from '../containers/UserProfileImageContainer'

const firstName = user =>
  user ? (user.name ? user.name.split(' ')[0] : '') : ''

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
            {({ userState }) => {
              return (
                <Text style={[styles.bannerTitle, styles.strong]}>{`Welcome${
                  userState ? `${firstName(userState)}` : ``
                }!`}</Text>
              )
            }}
          </User>
        </View>
        <UserProfileImageConsumer>
          {source => (
            <UserProfileImage
              source={source}
              styles={{ headerAvatar: styles.headerAvatar }}
            />
          )}
        </UserProfileImageConsumer>
      </View>
    </View>
  )
}

export default Banner
