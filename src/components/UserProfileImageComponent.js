// @flow
import React           from 'react'
import { View, Image } from 'react-native'

type UserProfileImageProps = {
  styles: any,
  source: string,
}

/**
 * @function UserProfileImageComponent
 * Component used as the avatar
 */
const UserProfileImageComponent = ({
  styles,
  source,
}: UserProfileImageProps) => {
  return (
    <View>
      <Image source={source} style={styles.headerAvatar} />
    </View>
  )
}

export default UserProfileImageComponent
