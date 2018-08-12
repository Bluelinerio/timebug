import React                 from 'react'
import { View, Image }       from 'react-native'
import LogoutButtonContainer from '../containers/LogoutButtonContainer'

type UserProfileImageProps = {
  styles: any,
  source: string
}

const UserProfileImageComponent = ({
  styles,
  source
}: UserProfileImageProps) => {
  return (
    <View>
      <LogoutButtonContainer>
        <Image source={source} style={styles.headerAvatar} />
      </LogoutButtonContainer>
    </View>
  )
}

export default UserProfileImageComponent
