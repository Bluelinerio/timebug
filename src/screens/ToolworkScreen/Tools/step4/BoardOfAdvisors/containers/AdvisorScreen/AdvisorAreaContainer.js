// @flow
import { mapProps } from 'recompose'
import AdvisorArea  from '../../components/AdvisorScreen/AdvisorArea'

type Props = {
  advisor: {
    name: string,
    category: string,
    id: string,
    contact: any | null,
  },
  goToSync: () => any,
}

const merge = (props: Props) => {
  const { advisor, goToSync } = props
  const { name, category } = advisor
  const hasContact = !!advisor.contact
  const contact = advisor.contact || {}
  const actualContact = contact.contact || {}
  const {
    phoneNumbers,
    emailAddresses,
    thumbnailImageData: thumbnail,
    displayName,
  } = actualContact
  return {
    name,
    category,
    phoneNumbers,
    emailAddresses,
    thumbnail,
    displayName,
    hasContact,
    goToSync,
  }
}

export default mapProps(merge)(AdvisorArea)
