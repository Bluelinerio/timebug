/* @flow */
import React from 'react'
import md5 from 'md5'
import User from './User'
import LogoutButtonContainer from './LogoutButtonContainer'
import OpenLoginModalContainer from './OpenLoginModalContainer'

type Props = {
  children: ({ uri: string }) => React.Node | [React.Node]
}

const UserProfileImageConsumer = ({ children }: Props) => (
  <User>
    {({ userState }) => {
      if (userState && userState.facebookId)
        return (
          <LogoutButtonContainer>
            {children({
              uri: `https://graph.facebook.com/${
                userState.facebookId
              }/picture?type=normal`
            })}
          </LogoutButtonContainer>
        )
      else
        //TODO: REMOVE AND REPLACE WITH ACTUAL PLACEHOLDER
        return (
          <OpenLoginModalContainer>
            {children({
              uri: `https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png`
            })}
          </OpenLoginModalContainer>
        )
    }}
  </User>
)

export default UserProfileImageConsumer
