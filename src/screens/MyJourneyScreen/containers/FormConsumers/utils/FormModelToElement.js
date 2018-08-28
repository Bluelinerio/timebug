//@flow
import {
  SimpleModelData,
  Model,
  AwardData
}                        from '../../../../../redux/reducers/awards.reducer.js'
import { HeaderElement } from '../../../components/GenericHeader'
import {
  CHECKBOX,
  LABEL,
  STRUCT
}                        from '../../../../../static/awards/modelTypes'
import {
  FormElement
}                        from '../../types'

type FindColumnElementsArgs = {
  model: SimpleModelData
}

type BuildElementsArgs = {
  header: Array<HeaderElement>,
  componentDataArray?: Array<any>,
  data?: AwardData
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

export const buildElements = ({
  header,
  componentDataArray = [],
  data = {}
}: BuildElementsArgs): Array<FormElement> => {
  return componentDataArray.reduce((allElements, componentElement) => {
    const elements: Array<FormElement> | null = componentElement
      ? Object.keys(componentElement).reduce((elements, key) => {
          const value = componentElement[key]
          if (header.elements.length > 0) {
            const element = header.elements.map(el => {
              const { type, key: actualKey } = el
              if (type === LABEL) {
                const text = value[actualKey]
                return {
                  ...el,
                  text
                }
              } else if (type !== STRUCT) {
                const dataRowElement = data[key]
                return {
                  ...el,
                  formIndex: key,
                  formKey: actualKey,
                  value: dataRowElement ? dataRowElement[actualKey].value : null
                }
              }
            })
            return [
              ...elements,
              {
                elements: element
              }
            ]
          }
          return elements
        }, [])
      : null
    if (elements) return [...allElements, ...elements]
    return allElements
  }, [])
}
