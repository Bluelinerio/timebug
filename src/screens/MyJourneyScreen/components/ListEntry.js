//@flow
import React                           from 'react'
import { View }                        from 'react-native'
import styles                          from './../styles'
import LabelComponent                  from './FormModelComponents/LabelComponent'
import CheckBoxComponent               from './FormModelComponents/CheckboxComponent'
import { LABEL, CHECKBOX }             from './../../../static/awards/modelTypes'
import type { LabelComponentStyle }    from './FormModelComponents/LabelComponent'
import type { RenderizableTypes }      from './../../../static/awards/modelTypes'
import type { CheckboxComponentStyle } from './FormModelComponents/CheckboxComponent'

type EntryWrapperProps = {
  style?: LabelComponentStyle | CheckboxComponentStyle,
  children: React.ComponentType<any>,
}

type EntryProps = {
  style?: LabelComponentStyle | CheckboxComponentStyle,
  type: RenderizableTypes,
}

const ListEntryWrapper = (props: EntryWrapperProps) => {
  const { style, children } = props
  return <View style={[styles.element, style.container]}>{children}</View>
}

const ListEntry = (props: EntryProps) => {
  const { type } = props
  if (type === LABEL) return <LabelComponent {...props} />
  else if (type === CHECKBOX) return <CheckBoxComponent {...props} />
  else return null
}

const Entry = (props: EntryProps) => {
  const { style } = props
  return (
    <ListEntryWrapper style={style}>
      <ListEntry {...props} />
    </ListEntryWrapper>
  )
}
export default Entry
