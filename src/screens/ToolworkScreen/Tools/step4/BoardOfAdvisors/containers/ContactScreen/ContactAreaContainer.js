// @flow
import { connect }           from 'react-redux'
import { compose, mapProps } from 'recompose'
import selectors             from '2020_redux/selectors'
import ContactArea           from '../../components/ContactScreen/ContactArea'

type PhoneNumber = {
  digits: string,
  stringValue: string,
  type: string,
  label: string,
}

type Mail = {
  type: string,
  label: string,
  address: string,
  value: string,
}

type Props = {
  advisor: {
    name: string,
    category: string,
  },
  contact: {
    phoneNumbers: Array<PhoneNumber>,
    emailAddresses: Array<Mail>,
    displayName: string,
    thumbnailImageData: string,
  },
}

const mapStateToProps = (state: any) => {
  const user = selectors.user(state)
  const { name: userName } = user
  return {
    userName,
  }
}

const merge = (props: Props) => {
  const { advisor, contact, userName, goBack } = props
  const { name, category } = advisor
  const {
    phoneNumbers,
    emailAddresses,
    thumbnailImageData: thumbnail,
    displayName,
  } = contact
  return {
    userName,
    category,
    name,
    phoneNumbers,
    emailAddresses,
    thumbnail,
    displayName,
    goBack,
  }
}

export default compose(connect(mapStateToProps), mapProps(merge))(ContactArea)
