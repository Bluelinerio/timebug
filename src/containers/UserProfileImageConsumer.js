/* @flow */
import React from 'react'
import md5 from 'md5'
import User from './User'

type Props = {
  children: ({ uri: string }) => React.Node | [React.Node]
}

const UserProfileImageConsumer = ({ children }: Props) => (
  <User>
    {({ userState }) => {
      console.log(userState)
      if (userState && userState.facebookId)
        return children({
          uri: `https://graph.facebook.com/${userState.facebookId}/picture?type=normal`
        })
      else return null
    }}
  </User>
)

export default UserProfileImageConsumer
