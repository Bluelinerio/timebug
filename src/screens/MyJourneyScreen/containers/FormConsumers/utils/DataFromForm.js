//@flow
import type { SelectedKeys } from '../../types'
import R from 'ramda'

const getDataFromForm = (formData: any, wantedKeys: SelectedKeys): any => {
  if (!formData || R.isEmpty(formData) || R.isEmpty(wantedKeys)) return {}
  return Object.keys(wantedKeys).reduce((obj, k) => {
    const { form, key } = wantedKeys[k]
    if (!formData[form] || !formData[form][key]) return { ...obj }
    return {
      ...obj,
      [k]: formData[form][key]
    }
  }, {})
}

export default getDataFromForm
