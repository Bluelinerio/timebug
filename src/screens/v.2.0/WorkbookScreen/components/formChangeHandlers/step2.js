// @flow
import { FORM_KEYS } from '2020_forms/forms/step2'
import { Alert } from 'react-native'

export const onChange = () => {
  let happened = false
  return (value: any, key: string) => {
    if (!happened)
      if (key === FORM_KEYS.form_2_ideal_week_time_) {
        Alert.alert(
          'FYI',
          `Changing these values will effect the values entered in your ideal week during Step 2(if you have completed this exercise.)
          `
        )
        happened = true
      }
  }
}
