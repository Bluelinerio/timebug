// @flow
import { connect }                          from 'react-redux'
import { checkContactPermissions }          from '2020_redux/actions/contacts.actions'
import {
  denyPermission,
  syncPermissions,
}                                           from '2020_redux/actions/permissions.actions'
import { compose, mapProps }                from 'recompose'
import selectors                            from '2020_redux/selectors'
import ContactSettingComponent              from '../components/ContactSettingComponent'
import { GRANTED, DENIED, NEVER_ASK_AGAIN } from '2020_constants/constants'
import { READ_CONTACTS }                    from '2020_constants/permissions'
import { openSettings }                     from '2020_modules/settings'

type StateProps = {
  permission: string,
  isRequesting: boolean,
}

type DispatchProps = {
  requestPermissions: () => void,
  denyPermission: any => void,
  syncPermissions: () => void,
}

type Props = any | StateProps | DispatchProps

const mapStateToProps = (state: any): StateProps => {
  const permissions = selectors.permissions(state) || []
  const permissionState = selectors.getPermissions(state)
  const { requesting, permissionInProcess } = permissionState
  const permission = permissions.find(perm => perm.value === READ_CONTACTS)
  const isRequesting = requesting && permissionInProcess === READ_CONTACTS
  return {
    permission: permission,
    isRequesting,
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  requestPermissions: () => dispatch(checkContactPermissions()),
  denyPermission: permissionStatus =>
    dispatch(denyPermission(permissionStatus)),
  syncPermissions: () => dispatch(syncPermissions()),
})

const merge = (props: Props) => {
  const {
    requestPermissions,
    permission,
    denyPermission,
    isRequesting,
    syncPermissions,
  } = props
  const text = 'Allow Access to Contacts'

  const value = permission && permission.status === GRANTED

  const isPermanentlyLocked =
    permission && permission.status === NEVER_ASK_AGAIN

  const deviceSettingsLink = () => {
    return openSettings()
  }

  const onSwitch = (val: boolean) => {
    if (val === true) requestPermissions()
    if (val === false)
      denyPermission({
        permission: READ_CONTACTS,
        status: DENIED,
      })
  }

  return {
    text,
    value,
    onSwitch,
    isPermanentlyLocked,
    isRequesting,
    deviceSettingsLink,
    syncPermissions,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(merge)
)(ContactSettingComponent)
