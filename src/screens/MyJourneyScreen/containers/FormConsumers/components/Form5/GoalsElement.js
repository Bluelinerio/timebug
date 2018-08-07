//@flow
import React     from 'react'
import { View }  from 'react-native'
import ListEntry from '../../../../components/ListEntry'
import styles    from '../../../../styles'

type GoalsElementElementProps = {
  elements: [any],
  submitAnswers: any,
  step: string,
  style?: any
}

const GoalElement = ({
  elements,
  submitAnswers,
  step,
  style = {}
}: GoalsElementElementProps) => {
  return elements ? (
    <View style={[styles.row, styles.elementRow, style.row]}>
      {elements.map(el => {
        return (
          <ListEntry
            key={`${el.formIndex}-${el.formKey}`}
            {...el}
            style={style}
            submitAnswers={submitAnswers}
            step={step}
          />
        )
      })}
    </View>
  ) : null
}

export default GoalElement
