//@flow
import React from 'react'
import ListEntry from '../../../../components/ListEntry'
import t from 'reactotron-react-native'

type GoalsElementElementProps = {
  elements: any,
  style?: any
}

const GoalElement = ({ elements, style = {} }: GoalsElementElementProps) => {
  return elements
    ? elements.map(el => {
        return <ListEntry {...el} style={style} />
      })
    : null
}

export default GoalElement
