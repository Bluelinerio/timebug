// @flow
import { connect }           from 'react-redux'
import { compose, mapProps } from 'recompose'
import { removeContact }     from '2020_redux/actions/contacts.actions'
import { getContactName }    from '../../utils'
import AdvisorArea           from '../../components/AdvisorScreen/AdvisorArea'

type Props = {
  advisor: {
    name: string,
    category: string,
    id: string,
    contact: any | null,
  },
  goToSync: () => any,
  removeContact: () => any,
  storeAwardData: (any, any) => any,
  data: any,
  tool: any,
}

const mapDispatchToProps = (dispatch: any) => ({
  removeContact: (advisorId, fn) => () => {
    dispatch(removeContact({ advisorId }))
    if (fn) fn()
  },
})

const unsyncContact = ({ advisorId, data, tool, storeAwardData }) => {
  const { value } = data
  const dataWithoutAdvisor = value.filter(adv => adv.advisorId !== advisorId)
  storeAwardData(dataWithoutAdvisor, tool)
}

const merge = (props: Props) => {
  const {
    advisor,
    goToSync,
    removeContact,
    storeAwardData,
    data,
    tool,
    goToBoard,
  } = props
  const { name, category } = advisor
  const unsync = () => {
    unsyncContact({ advisorId: advisor.id, data, tool, storeAwardData })
    goToBoard()
  }
  const hasContact = !!advisor.contact
  const handleUnsync = hasContact
    ? removeContact(advisor.id, unsync)
    : () => null
  const contact = advisor.contact || {}
  const actualContact = contact.contact || {}
  const {
    phoneNumbers,
    emailAddresses,
    thumbnailImageData: thumbnail,
  } = actualContact
  const displayName = getContactName(actualContact)
  return {
    name,
    category,
    phoneNumbers,
    emailAddresses,
    thumbnail,
    displayName,
    hasContact,
    goToSync,
    handleUnsync,
  }
}

export default compose(connect(null, mapDispatchToProps), mapProps(merge))(
  AdvisorArea
)
