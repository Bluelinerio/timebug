// @flow
import React         from 'react'
import OptionsDialog from './OptionsDialog'

export const PHONE = 'PHONE'
export const MAIL = 'MAIL'
export const SMS = 'SMS'

export const actions = {
  PHONE,
  MAIL,
  SMS,
}

type Props = {
  open: string | null,
  phoneNumbers: Array<string>,
  emailAddresses: Array<string>,
  onClose: () => any,
  onPhoneSelect: any => any,
  onMailSelect: any => any,
}

class DialogContainer extends React.PureComponent<Props> {
  render() {
    const {
      phoneNumbers,
      emailAddresses,
      open,
      onClose,
      onPhoneSelect,
      onMailSelect,
    } = this.props
    return (
      <React.Fragment>
        <OptionsDialog
          elements={
            phoneNumbers ? phoneNumbers.map(phone => phone.stringValue) : null
          }
          dialogVisible={open === PHONE || open === SMS}
          onClose={onClose}
          onSelect={result => onPhoneSelect(result, open)}
        />
        <OptionsDialog
          elements={
            emailAddresses ? emailAddresses.map(mail => mail.address) : null
          }
          dialogVisible={open === MAIL}
          onClose={onClose}
          onSelect={onMailSelect}
        />
      </React.Fragment>
    )
  }
}

export default DialogContainer
