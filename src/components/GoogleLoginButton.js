import React, { useCallback } from 'react'
import {
  GoogleSigninButton,
} from 'react-native-google-signin'
import { useDispatch } from 'react-redux'
import { googleLogin } from '2020_redux/actions/auth.actions'

const GoogleLoginButton = () => {
  const dispatch = useDispatch()

  const signIn = useCallback(
    async () => {
      dispatch(googleLogin())
    },
    [dispatch]
  )

  return (
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signIn}
    />
  )
}

export default GoogleLoginButton
