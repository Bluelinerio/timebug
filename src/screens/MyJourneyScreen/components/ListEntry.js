import React               from 'react'
import LabelComponent      from './FormModelComponents/LabelComponent'
import CheckBoxComponent   from './FormModelComponents/CheckboxComponent'
import { LABEL, CHECKBOX } from '../../../static/awards/modelTypes'

const ListEntry = props => {
  const { type } = props
  if (type === LABEL)         return <LabelComponent {...props} />
  else if (type === CHECKBOX) return <CheckBoxComponent {...props} />
  else                        return null
}

export default ListEntry
