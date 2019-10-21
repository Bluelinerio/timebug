// @flow
import React, { useState, useEffect } from 'react'
import GoogleService from '../services/google'
import tron from 'reactotron-react-native'

type Props = {
  user: any,
  children: React.ReactChildren,
}

const GoogleLogout = (props: Props) => {
  const [uri, setUri] = useState(
    `https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png`
  )
  const { user, children } = props
  useEffect(
    () => {
      const fetch = async () => {
        try {
          const res = await GoogleService.getCurrentUser()
          const currentUser = res.user
          const uri = currentUser ? currentUser.photo : null
          if (uri) setUri(uri)
        } catch (err) {
          tron.log(err)
        }
      }
      fetch()
    },
    [user]
  )
  return children({ uri })
}

export default GoogleLogout
