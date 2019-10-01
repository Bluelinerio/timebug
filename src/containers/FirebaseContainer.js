// @flow
import React       from 'react'
import { connect } from 'react-redux'
import firebase    from 'react-native-firebase'
import {
  changeFirebaseKey,
  setFirebasePermission,
}                  from '2020_redux/actions/permissions.actions'
import type {
  ChangeFirebaseKeyPayload,
  FirebasePermissionPayload,
}                  from '2020_redux/actions/permissions.actions'
import tron        from 'reactotron-react-native'

type DispatchProps = {
  changeFcm: ChangeFirebaseKeyPayload => void,
  changePermissions: FirebasePermissionPayload => void,
}

type Props = DispatchProps

class FirebaseComponent extends React.PureComponent<Props> {
  storeFcm = (fcm: string) => {
    const { changeFcm } = this.props
    changeFcm({ fcm })
  }

  onMessage(message: any) {
    console.log(message)
  }

  async requestPermission() {
    console.log('Setting up firebase permissions')
    const { permission, changePermissions } = this.props
    try {
      await firebase.messaging().requestPermission()
      if (permission !== true) changePermissions({ status: true })
    } catch (error) {
      tron.log(error)
      if (permission !== false) changePermissions({ status: false })
    }
  }

  componentDidMount() {
    const { permission, changePermissions } = this.props
    console.log('Setting up firebase component')
    firebase
      .messaging()
      .getToken()
      .then(this.storeFcm)

    firebase
      .messaging()
      .hasPermission()
      .then(async enabled => {
        if (enabled) {
          if (permission !== enabled) changePermissions({ status: enabled })
          tron.log('User has provided permissions')
        } else {
          await this.requestPermission()
        }
      })

    this.onTokenRefreshListener = firebase
      .messaging()
      .onTokenRefresh(this.storeFcm)

    this.messageListener = firebase.messaging().onMessage(this.onMessage)
  }

  componentWillUnmount() {
    this.onTokenRefreshListener()
    this.messageListener()
  }

  render() {
    return null
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  changeFcm: (payload: ChangeFirebaseKeyPayload) =>
    dispatch(changeFirebaseKey(payload)),
  changePermissions: (payload: FirebasePermissionPayload) =>
    dispatch(setFirebasePermission(payload)),
})

const FirebaseContainer = connect(null, mapDispatchToProps)(FirebaseComponent)

export const withFirebase = Component => {
  const container = () => (
    <React.Fragment>
      <FirebaseContainer />
      <Component />
    </React.Fragment>
  )
  return container
}
