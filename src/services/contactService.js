// @flow
import { PermissionsAndroid, Platform } from 'react-native'
import Contacts                         from 'react-native-unified-contacts'
import {
  UNDETERMINED,
  GRANTED,
  DENIED,
  NEVER_ASK_AGAIN,
}                                       from '2020_constants/constants'

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

export const stepsWithContacts = ['4']

class ContactService {
  contactCache = null

  async requestPermissions(): PermissionResponse {
    if (Platform.OS === 'android') {
      try {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
          }
        )
        if (result === PermissionsAndroid.RESULTS.GRANTED) {
          return {
            permission: PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            status: GRANTED,
          }
        } else if (result === PermissionsAndroid.RESULTS.DENIED) {
          return {
            permission: PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            status: DENIED,
          }
        } else {
          return {
            permission: PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            status: NEVER_ASK_AGAIN,
          }
        }
      } catch (err) {
        return {
          permission: PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          status: UNDETERMINED,
        }
      }
    } else {
      return {
        permission: 'ios-read-contacts',
        status: GRANTED,
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
