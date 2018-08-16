/* @flow */
import React from 'react'
import md5 from 'md5'
import User from './User'
import LogoutButtonContainer from '../containers/LogoutButtonContainer'

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
        return children({
          uri: `https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png`
        })
    }}
  </User>
)

export default UserProfileImageConsumer
