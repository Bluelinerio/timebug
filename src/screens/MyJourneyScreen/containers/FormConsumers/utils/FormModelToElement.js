//@flow
import {
  SimpleModelData,
  Model
}                        from '../../../../../redux/reducers/awards.reducer.js'
import { HeaderElement } from '../../../components/GenericHeader'
import {
  CHECKBOX,
  LABEL,
  STRUCT
}                        from '../../../../../static/awards/modelTypes'

type FindColumnElementsArgs = {
  model: SimpleModelData
}

const isTypeRenderizable = (model: Model): boolean =>
  model.column === true && (model.type === LABEL || model.type === CHECKBOX)

const isModelStruct = (model: Model): boolean =>
  model.type && model.type === STRUCT

export const findColumnElements = ({ model }: FindColumnElementsArgs) => {
  return Object.keys(model)
    .reduce((elements, key) => {
      const mod = model[key]
      if (mod && isTypeRenderizable(mod)) return [...elements, mod]
      else if (mod && isModelStruct(mod))
        return [...elements, ...findColumnElements({ model: mod.fields })]
      else [...elements]
    }, [])
    .filter(model => !!model)
}

export const buildHeader = (model: SimpleModelData): Array<HeaderElement> => {
  const columnElements = findColumnElements({ model })
  return columnElements.map(element => ({
    text: element.options.header,
    ...element
  }))
}
