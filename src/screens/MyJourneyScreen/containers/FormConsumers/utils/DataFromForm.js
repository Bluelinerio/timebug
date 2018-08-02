const getDataFromForm = (formData: any, wantedKeys: any) => {
  return Object.keys(wantedKeys).reduce((obj, k) => {
    const { form, key } = wantedKeys[k]
    return {
      ...obj,
      [k]: formData[form][key]
    }
  }, {})
}

export default getDataFromForm