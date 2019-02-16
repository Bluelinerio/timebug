import { Platform } from 'react-native'

export const getContactName = (contact: any) => {
  return Platform.OS === 'ios'
    ? `${contact.fullName}`
    : `${contact.displayName}`
}
