//@flow
import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import UserProfileImageConsumer from '../containers/UserProfileImageConsumer';
import styles, { bannerColor } from '../styles/components/Banner/mini';
import UserProfileImage from '../containers/UserProfileImageContainer';
import { icon } from '../resources/images';

type Props = {
  onBackPress: () => any,
  backButton: boolean,
};

const MinifiedBanner = ({ onBackPress = null, backButton = false }: Props) => {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="dark-content" backgroundColor={bannerColor} />
      <View style={styles.headerUpperRow}>
        <View style={[styles.headerUpperRowBlock, styles.arrowContainer]}>
          {backButton &&
            onBackPress && (
              <HeaderBackButton tintColor="#212121" onPress={onBackPress} />
            )}
        </View>
        <View style={styles.headerUpperRowBlock}>
          <Image style={styles.headerIcon} source={icon} />
        </View>
        <View
          style={[styles.headerUpperRowBlock, styles.headerUserImageContainer]}
        >
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
  );
};

export default MinifiedBanner;
