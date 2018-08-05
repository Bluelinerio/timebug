import {
  CHECKBOX,
  LABEL,
  STRUCT
} from '../../../../../static/awards/modelTypes'

export const findColumnElements = ({ model }) => {
  return Object.keys(model)
    .reduce((elements, key) => {
      const mod = model[key]
      if (
        mod &&
        mod.column === true &&
        (mod.type === LABEL || mod.type === CHECKBOX)
      )
        return [...elements, mod]
      else if (mod && mod.type && mod.type === STRUCT)
        return [...elements, ...findColumnElements({ model: mod.fields })]
    }, [])
    .filter(model => !!model)
}

export const buildHeader = model => {
  const columnElements = findColumnElements({ model })
  return columnElements.map(element => ({
    text: element.options.header,
    ...element
  }))
}
