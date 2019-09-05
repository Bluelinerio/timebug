// @flow
import { FORM_KEYS } from '2020_forms/forms/step30'
import { Alert } from 'react-native'

export const onChange = () => {
  let happened = false
  return (value: any, key: string) => {
    if (!happened)
      if (key === FORM_KEYS.form_30_next_year) {
        Alert.alert(
          'Caution',
          `Changing any of these values will affect your ideal week created during step 2 if you have completed it before. \nTo undo these changes, close and reopen the form
          `
        )
        happened = true
      }
  }
}
