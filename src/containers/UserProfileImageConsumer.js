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
      if (isLoggedInd && userState.email)
        return children({
          uri: `https://www.gravatar.com/avatar/${md5(userState.email)}`
        })
      else return null
    }}
  </User>
)

export default UserProfileImageConsumer
