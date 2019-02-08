// @flow
import { connect }           from 'react-redux'
import { mapProps, compose } from 'recompose'
import { addContact }        from '2020_redux/actions/contacts.actions'
import SyncScreen            from '../../components/SyncScreen/SyncScreen'
import type { Props }        from '../../components/SyncScreen/SyncScreen'

type DispatchProps = {
  storeContact: string => any => any,
}

type ContainerProps = Props | DispatchProps

const mapDispatchToProps = (dispatch: any) => ({
  storeContact: (advisorId: string) => (contact: any) =>
    dispatch(addContact({ contact, advisorId })),
})

const merge = (props: ContainerProps) => {
  const { advisor, storeContact, ...rest } = props
  const addContactForAdvisor = storeContact(advisor.id)
  return {
    ...rest,
    advisor,
    addContactForAdvisor,
  }
}

export default compose(connect(null, mapDispatchToProps), mapProps(merge))(
  SyncScreen
)
