//@flow

/**
 * Deprecated
 */

import React                      from 'react'
import { View, Image, StatusBar } from 'react-native'
import Text                       from '2020_components/Text'
import UserProfileImageConsumer   from '../containers/UserProfileImageConsumer'
import styles, { bannerColor }    from '../styles/components/StartScreenBanner'
import User                       from '../containers/User'
import UserProfileImage           from '../containers/UserProfileImageContainer'
import { icon }                   from '../resources/images'

const firstName = (user: { name: string }): string =>
  user ? (user.name ? user.name.split(' ')[0] : '') : ''

const StartScreenBanner = () => {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="dark-content" backgroundColor={bannerColor} />
      <View style={styles.headerUpperRow}>
        <View>
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
      <View style={styles.headerMainRow}>
        <View style={styles.headerIconContainer}>
          <Image style={styles.headerIcon} source={icon} />
        </View>
        <View style={styles.headerTextContainer}>
          <User>
            {({ userState }) => {
              return (
                <Text
                  style={[styles.bannerTitle, styles.strong, styles.headerText]}
                >{`Welcome${userState ? `${firstName(userState)}` : ``}`}</Text>
              )
            }}
          </User>
          <Text style={[styles.thin, styles.headerText]}>
            Challenge Your Life Vision Today
          </Text>
        </View>
      </View>
    </View>
  )
}

export default StartScreenBanner
