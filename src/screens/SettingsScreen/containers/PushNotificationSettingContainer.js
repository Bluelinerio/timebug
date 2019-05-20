// @flow
import { connect }                 from 'react-redux'
import { compose, mapProps }       from 'recompose'
import selectors                   from '2020_redux/selectors'
import SettingComponent            from '../components/SettingComponent'
import {
  addPermission,
  removePermission,
}                                  from '2020_redux/actions/permissions.actions'
import { SEND_PUSH_NOTIFICATIONS } from '2020_constants/permissions'

type Props = {
  hasPermission: boolean,
  setPermission: boolean => void,
}

const mapStateToProps = (state: any) => {
  const permissions = selectors.permissions(state)
  const permission = permissions.find(p => p === SEND_PUSH_NOTIFICATIONS)

  const hasPermission = !!permission

  return {
    hasPermission,
  }
}

const payload = {
  permission: SEND_PUSH_NOTIFICATIONS,
}

const mapDispatchToProps = (dispatch: any) => ({
  setPermission: (hasPermission: boolean) =>
    hasPermission
      ? dispatch(addPermission(payload))
      : dispatch(removePermission(payload)),
})

const merge = (props: Props) => {
  const { hasPermission, setPermission } = props

  const text = 'Allow Push Notifications'

  const value = hasPermission

  const onSwitch = (val: boolean) => setPermission(val)

  return {
    text,
    value,
    onSwitch,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(merge)
)(SettingComponent)
