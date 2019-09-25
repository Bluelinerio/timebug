/* @flow */

/**
 * This banner has been deprecated in favor of the minified banner
 */

import React                    from 'react'
import { View }                 from 'react-native'
import Icon                     from 'react-native-vector-icons/MaterialIcons'
import moment                   from 'moment'
import Text                     from '2020_components/Text'
import VerticalGradient         from '../containers/VerticalGradient'
import UserProfileImageConsumer from '../containers/UserProfileImageConsumer'
import styles                   from '../screens/styles/dashboard.styles'
import User                     from '../containers/User'
import UserProfileImage         from '../containers/UserProfileImageContainer'

type BannerProps = {
  goBack: any => any,
  root: boolean,
}

type BackButtonProps = {
  onPress: any => any,
}

const firstName = user =>
  user ? (user.name ? user.name.split(' ')[0] : '') : ''

const BackButton = ({ onPress }: BackButtonProps) => {
  return (
    <View style={styles.headerBackButton}>
      <Icon
        name="arrow-back"
        size={24}
        style={styles.backButton}
        underlayColor="transparent"
        onPress={onPress}
      />
    </View>
  )
}

const Banner = ({ goBack, root = true }: BannerProps) => {
  return (
    <View>
      <VerticalGradient />
      <View style={styles.header}>
        {!root && <BackButton onPress={goBack} />}
        <View style={styles.headerBlock}>
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
    </View>
  )
}

export default Banner
