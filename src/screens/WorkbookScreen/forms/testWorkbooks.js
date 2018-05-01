import R from 'ramda'

const test = false
const testWorkbooks = workbooks => {
  if (__DEV__ && test) {
    //const mapSubform = filterKeys(['id'])
    const mapForm = ({ form, formId }) =>
      Object.keys(form).map(subFormId =>
        Object.keys(form[subFormId].type.meta.props)
          .filter(key => key !== 'id')
          .map(name => {
            const struct = form[subFormId].type.meta.props[name]
            return {
              formId,
              subFormId,
              name,
              type: struct.displayName
            }
          })
      )
    const subforms = R.flatten(
      Object.keys(workbooks).map(formId =>
        mapForm({
          formId,
          form: workbooks[formId]
        })
      )
    )
    console.log(subforms)
    const names = subforms.map(subform => subform.name)
    console.log(names)
    subforms.reduce((sum, subform) => {
      if (Object.keys(sum).includes(subform.name)) {
        const previous = sum[subform.name]
        throw new Error(
          `both forms has the same name:${subform.name}: \n ${JSON.stringify(
            subform
          )} and ${JSON.stringify(previous)}`
        )
      }
      return {
        ...sum,
        [subform.name]: subform
      }
    }, {})
  }
}

export default testWorkbooks
