// @flow
import { connect }            from 'react-redux'
import { PermissionsAndroid } from 'react-native'
import { mapProps, compose }  from 'recompose'
import selectors              from '2020_redux/selectors'
import { addContact }         from '2020_redux/actions/contacts.actions'
import SyncScreen             from '../../components/SyncScreen/SyncScreen'
import type { Props }         from '../../components/SyncScreen/SyncScreen'
import { GRANTED }            from '2020_constants/constants'

type DispatchProps = {
  storeContact: string => any => any,
}

type ContainerProps = Props | DispatchProps

const mapStateToProps = (state: any) => {
  const { permissions = [] } = selectors.getContactState(state)
  const permission = permissions.find(
    perm => perm.name === PermissionsAndroid.PERMISSIONS.READ_CONTACTS
  )
  return {
    permission,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  storeContact: (advisorId: string) => (contact: any) =>
    dispatch(addContact({ contact, advisorId })),
})

const merge = (props: ContainerProps) => {
  const { advisor, storeContact, permission, ...rest } = props
  const addContactForAdvisor = storeContact(advisor.id)
  const canHandleContacts =
    permission && permission.status === GRANTED ? true : false
  return {
    ...rest,
    advisor,
    addContactForAdvisor,
    canHandleContacts,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(merge)
)(SyncScreen)
