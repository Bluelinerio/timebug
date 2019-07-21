// @flow
import { connect }                 from 'react-redux'
import { mapProps, compose }       from 'recompose'
import selectors                   from '2020_redux/selectors'
import { addContact }              from '2020_redux/actions/contacts.actions'
import { checkContactPermissions } from '2020_redux/actions/contacts.actions'
import { GRANTED }                 from '2020_constants/constants'
import { READ_CONTACTS }           from '2020_constants/permissions'
import type { Props }              from '../../components/SyncScreen/SyncScreen'
import SyncScreen                  from '../../components/SyncScreen/SyncScreen'
import mapNavigationDispatch       from '2020_HOC/NavigationServiceHOC'
import { goToSettings }            from '2020_redux/actions/nav.actions'

type DispatchProps = {
  storeContact: string => any => any,
  requestPermission: () => void,
}

type NavigationDispatchProps = {
  goToSettings: () => void,
}

type StateProps = {
  permission: string,
  isRequesting: string,
}

type ContainerProps = Props | DispatchProps | NavigationDispatchProps | StateProps

const mapStateToProps = (state: any): StateProps => {
  const permissions = selectors.permissions(state) || []
  const permissionState = selectors.getPermissions(state)
  const { requesting, permissionInProcess } = permissionState
  const permission = permissions.find(perm => perm.value === READ_CONTACTS)
  const isRequesting = requesting && permissionInProcess === READ_CONTACTS
  return {
    permission,
    isRequesting,
  }
}

const mapNavigationDispatchToProps = (dispatch: any): NavigationDispatchProps => ({
  goToSettings: () => dispatch(goToSettings()),
})

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  storeContact: (advisorId: string) => (contact: any) =>
    dispatch(addContact({ contact, advisorId })),
  requestPermission: () => dispatch(checkContactPermissions()),
})

const merge = (props: ContainerProps) => {
  const { advisor, storeContact, permission, isRequesting, ...rest } = props
  const addContactForAdvisor = storeContact(advisor.id)
  const canHandleContacts =
    permission && permission.status === GRANTED ? true : false
  return {
    ...rest,
    isRequesting,
    advisor,
    addContactForAdvisor,
    canHandleContacts,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapNavigationDispatch(mapNavigationDispatchToProps),
  mapProps(merge)
)(SyncScreen)
