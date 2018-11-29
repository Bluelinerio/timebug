import React from 'react';
import { View, Image } from 'react-native';

type UserProfileImageProps = {
  styles: any,
  source: string,
};

const UserProfileImageComponent = ({
  styles,
  source,
}: UserProfileImageProps) => {
  return (
    <View>
      <Image source={source} style={styles.headerAvatar} />
    </View>
  );
};

export default UserProfileImageComponent;
