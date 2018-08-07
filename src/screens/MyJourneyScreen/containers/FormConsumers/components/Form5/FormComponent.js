import React from 'react'
import { View } from 'react-native'
import GoalsHeader from './GoalsHeader'
import GoalsElement from './GoalsElement'
import styles from '../../../../styles'
import { mediumGray, gray400 } from '../../../../../../constants/colors'
import { LockedEntryWithCheck } from '../../../../components/LockedEntry'

const styleForEvenElements = {
  row: {
    backgroundColor: mediumGray
  }
}

const styleForUnevenElements = {
  row: {
    backgroundColor: gray400
  }
}

const isEven = (num: number): boolean => num % 2 === 0

/**
 * TODO: Add flow
 */
const FormComponent = props => {
  const { elements, submitAnswers, step } = props
  return (
    <View style={[styles.container, styles.tableContainer]}>
      <LockedEntryWithCheck check={() => elements && elements.length > 0}>
        <GoalsHeader {...props} />
        {elements &&
          elements.map((element, index) => (
            <GoalsElement
              key={index}
              style={
                !isEven(index) ? styleForUnevenElements : styleForEvenElements
              }
              {...element}
              submitAnswers={submitAnswers}
              step={step}
            />
          ))}
      </LockedEntryWithCheck>
    </View>
  )
}

export default FormComponent
