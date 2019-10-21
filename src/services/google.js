// @flow
import { Alert } from 'react-native'
import { GoogleSignin, statusCodes } from 'react-native-google-signin'

type User = {
  photo: string,
  email: string,
  familyName: string,
  givenName: string,
  name: string,
  id: number,
}

// photo:https://lh4.googleusercontent.com/-e3ckWKWJYq0/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdWd0zYPFhAj2nuVMXakhm87qodLA/s96-c/photo.jpg
// email:ogcol15@gmail.com
// familyName:Colmenares
// givenName:Oscar
// name:Oscar Colmenares
// id:103923030540312860430

class GoogleService {
  start() {
    const key =
      '85136175680-iqi1u0cgkf6mj521fdq18svc6kchanco.apps.googleusercontent.com'
    GoogleSignin.configure({
      webClientId: key,
    })
  }

  async login(): User {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      return userInfo.user
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // fail silently
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert(
          'There is a signin process being executed right now, please wait . . .'
        )
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert(
          'We are having trouble reaching play services, make sure they are enabled and updated'
        )
      } else {
        Alert.alert('An unknown error has happened, please try again later')
      }
      throw error
    }
  }

  async signOut() {
    try {
      await GoogleSignin.revokeAccess()
      await GoogleSignin.signOut()
      return
    } catch (error) {
      console.error(error)
    }
  }

  async getCurrentUser() {
    try {
      return GoogleSignin.getCurrentUser()
    } catch (error) {
      return null
    }
  }
}

const instance = new GoogleService()

instance.start()

export default instance
