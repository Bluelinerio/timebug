//@flow
import React from 'react'
import GenericElement, {
  GenericElementContent,
  GenericElementStyle
}            from '../../../../components/GenericElement'

type BoardOfAdvisorsElementProps = {
  boardMember: string,
  pillarsOfLife: string,
  interactionFrequency: string,
  style?: any
}

type ObjectStyles = {
  [x: string]: GenericElementStyle
}

const buildElements = (
  props: BoardOfAdvisorsElementProps
): [GenericElementContent] => {
  const mapKeyToStyle: ObjectStyles = {}
  return Object.keys(props).reduce((elements, key) => {
    const style = mapKeyToStyle[key]
    const text = props[key]
    return [
      ...elements,
      {
        text,
        style
      }
    ]
  }, [])
}

const FormElement = ({
  boardMember,
  pillarsOfLife,
  interactionFrequency,
  style = {}
}: BoardOfAdvisorsElementProps) => {
  const elements: [GenericElementContent] = buildElements({
    pillarsOfLife,
    boardMember,
    interactionFrequency
  })
  return <GenericElement elements={elements} style={style} />
}

export default FormElement
