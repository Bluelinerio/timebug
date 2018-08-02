//@flow
import React from 'react'
import styles from '../../../../styles'
import GenericElement, {
  GenericElementProps,
  GenericElementContent,
  GenericElementStyle
} from '../../../../components/GenericElement'

type BoardOfAdvisorsElementProps = {
  boardMember: string,
  pillarsOfLife: string,
  interactionFrequency: string,
  style?: any
}

type ObjectStyles = {
  [x: string]: GenericElementStyle
}

const renderText = (typical: number) => (ideal: number): string => {
  const result = typical - ideal
  return result > 0
    ? `+${result} hrs`
    : result < 0 ? `${result} hrs` : `${result} hrs`
}

const buildElements = props => {
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
  const elements = buildElements({
    pillarsOfLife,
    boardMember,
    interactionFrequency
  })
  return <GenericElement elements={elements} style={style} />
}

export default FormElement
