//@flow
import React     from 'react'
import { View }  from 'react-native'
import ListEntry from '../../../../components/ListEntry'
import styles    from '../../../../styles'

type GoalsElementElementProps = {
  elements: any,
  style?: any
}

const GoalElement = ({ elements, style = {} }: GoalsElementElementProps) => {
  return elements ? (
    <View style={[styles.row, styles.elementRow, style.row]}>
      {elements.map(el => {
        return (
          <ListEntry
            key={`${el.formIndex}-${el.formKey}`}
            {...el}
            style={style}
          />
        )
      })}
    </View>
  ) : null
}

export default GoalElement
