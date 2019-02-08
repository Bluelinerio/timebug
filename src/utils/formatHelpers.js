import { NativeContact } from '../services/contactService'

export const camelPad = str =>
  str
    .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/^./, str => str.toUpperCase())
    .trim()

export const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n)

export const getContactName = (contact: NativeContact) => {
  const { givenName, familyName, middleName, prefix, suffix } = contact
  const fullName = `${prefix ? `${prefix} ` : ''}${givenName}${
    middleName ? ` ${middleName}` : ''
  } ${familyName ? ` ${familyName}` : ''} ${suffix ? ` - ${suffix}` : ''}`
  return fullName
}

export const displayBase64 = (data: string) => `data:image/png;base64,${data}`
