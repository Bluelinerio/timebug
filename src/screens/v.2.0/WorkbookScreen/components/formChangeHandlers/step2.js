// @flow
import { FORM_KEYS } from '2020_forms/forms/step2'
import { Alert } from 'react-native'

export const onChange = () => {
  let happened = false
  return (value: any, key: string) => {
    if (!happened)
      if (key === FORM_KEYS.form_2_ideal_week_time_) {
        Alert.alert(
          'Caution',
          `Changing any of these values will affect your ideal next year created during step 30 if you have completed it before. \nTo undo these changes, close and reopen the form
          `
        )
        happened = true
      }
  }
}
