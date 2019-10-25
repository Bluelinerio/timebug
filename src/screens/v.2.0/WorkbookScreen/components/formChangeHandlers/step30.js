// @flow
import { FORM_KEYS } from '2020_forms/forms/step30'
import { Alert } from 'react-native'

export const onChange = () => {
  let happened = false
  return (value: any, key: string) => {
    if (!happened)
      if (key === FORM_KEYS.form_30_next_year) {
        Alert.alert(
          'FYI',
          `Changing these values will affect the values entered in your ideal week during Step 2(if you have completed this exercise).
          `
        )
        happened = true
      }
  }
}
