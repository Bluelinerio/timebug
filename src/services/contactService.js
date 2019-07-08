// @flow
import { Platform } from 'react-native'
import Permissions from 'react-native-permissions'
import Contacts from 'react-native-unified-contacts'
import {
  UNDETERMINED,
  GRANTED,
  DENIED,
  NEVER_ASK_AGAIN,
} from '2020_constants/constants'
import { READ_CONTACTS } from '2020_constants/permissions'

export type NativeContact = {
  recordID: string,
  emailAddresses: Array<{
    label: string,
    email: string,
  }>,
  phoneNumbers: Array<{
    label: string,
    number: string,
  }>,
  thumbNail: string,
  birthDay: any,
  familyName: string,
  givenName: string,
  middleName: string,
  hasThumbnail: string,
  thumbnailPath: string,
  birthday: any,
}

type PermissionResponse = {
  permission: string,
  status: string,
}

const permissionName = 'contacts'

const authorized = 'authorized'
const denied = 'denied'
const restricted = 'restricted'

export const stepsWithContacts = ['4']

class ContactService {
  contactCache = null

  async checkPermission(): PermissionResponse {
    try {
      const result = await Permissions.check(permissionName)
      if (result === authorized) {
        return {
          value: READ_CONTACTS,
          status: GRANTED,
        }
      } else if (result === denied) {
        return {
          value: READ_CONTACTS,
          status: Platform.OS === 'ios' ? NEVER_ASK_AGAIN : DENIED,
        }
      } else if (result === restricted) {
        return {
          value: READ_CONTACTS,
          status: NEVER_ASK_AGAIN,
        }
      } else {
        return {
          value: READ_CONTACTS,
          status: UNDETERMINED,
        }
      }
    } catch (err) {
      return {
        value: READ_CONTACTS,
        status: UNDETERMINED,
      }
    }
  }

  async requestPermissions(): PermissionResponse {
    try {
      const result = await Permissions.request(permissionName, {
        rationale: {
          title: 'Lifevision Contacts permission',
          message:
            'Lifevision would like to know your contacts so you can register them as trustworthy advisors and make it easy to contact them for support',
        },
      })
      if (result === authorized) {
        return {
          value: READ_CONTACTS,
          status: GRANTED,
        }
      } else if (result === denied) {
        return {
          value: READ_CONTACTS,
          status: Platform.OS === 'ios' ? NEVER_ASK_AGAIN : DENIED,
        }
      } else if (result === restricted) {
        return {
          value: READ_CONTACTS,
          status: NEVER_ASK_AGAIN,
        }
      } else {
        return {
          value: READ_CONTACTS,
          status: UNDETERMINED,
        }
      }
    } catch (err) {
      return {
        value: READ_CONTACTS,
        status: UNDETERMINED,
      }
    }
  }

  getAllContacts = async (): Array<NativeContact> => {
    if (this.contactCache) return this.contactCache
    try {
      const contacts = await new Promise((resolve, reject) => {
        Contacts.getContacts((err, contacts) => {
          if (err) {
            reject(err)
          } else {
            const sorted = contacts.sort((a, b) => {
              return a.givenName.toLowerCase() > b.givenName.toLowerCase()
                ? 1
                : a.givenName.toLowerCase() < b.givenName.toLowerCase() ? -1 : 0
            })
            resolve(sorted)
          }
        })
      })
      if (contacts) this.contactCache = contacts
      return contacts
    } catch (err) {
      throw err
    }
  }

  getContactByName = async (name: string): Array<NativeContact> => {
    try {
      const contacts = await new Promise((resolve, reject) => {
        Contacts.searchContacts(name, (err, contacts) => {
          if (err) {
            reject(err)
          } else {
            resolve(contacts)
          }
        })
      })
      if (contacts) this.contactCache = contacts
      return contacts
    } catch (err) {
      throw err
    }
  }

  checkPermissionsAndGetContacts = async (
    name: string
  ): Array<NativeContact> => {
    const { status } = await this.requestPermissions()
    if (status === GRANTED) {
      try {
        const contacts = await this.getContactByName(name)
        return contacts
      } catch (err) {
        throw err
      }
    } else {
      throw new Error('Permissions not granted')
    }
  }
}

export default new ContactService()
