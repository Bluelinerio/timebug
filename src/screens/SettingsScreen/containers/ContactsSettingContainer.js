// @flow
import { connect }             from 'react-redux'
import {
  checkContactPermissions,
  updatePermission,
}                              from '2020_redux/actions/contacts.actions'
import { PermissionsAndroid }  from 'react-native'
import { compose, mapProps }   from 'recompose'
import selectors               from '2020_redux/selectors'
import ContactSettingComponent from '../components/ContactSettingComponent'
import { GRANTED, DENIED }     from '2020_constants/constants'

type Props = any

const mapStateToProps = (state: any) => {
  const { permissions } = selectors.getContactState(state)
  const permission = permissions.find(
    perm => perm.name === PermissionsAndroid.PERMISSIONS.READ_CONTACTS
  )
  return {
    permission: permission,
  }
}

const mapDispatchToProps = dispatch => ({
  requestPermissions: () => dispatch(checkContactPermissions()),
  updatePermission: permissionStatus =>
    dispatch(updatePermission(permissionStatus)),
})

const merge = (props: Props) => {
  const { requestPermissions, permission, updatePermission } = props
  const text = 'Allow Access to Contacts'

  const value = permission && permission.status === GRANTED ? true : false

  const onSwitch = (val: boolean) => {
    if (val === true) requestPermissions()
    if (val === false)
      updatePermission({
        permission: PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        status: DENIED,
      })
  }

  return {
    text,
    value,
    onSwitch,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(merge)
)(ContactSettingComponent)
