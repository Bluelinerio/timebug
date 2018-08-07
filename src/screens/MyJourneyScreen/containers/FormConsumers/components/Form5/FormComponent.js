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

const FormComponent = props => {
  const { elements } = props
  return (
    <View style={[styles.container, styles.tableContainer]}>
      <LockedEntryWithCheck check={() => elements && elements.length > 0}>
        <GoalsHeader {...props} />
        {elements &&
          elements.map((element, index) => (
            <GoalsElement
              key={index}
              {...props}
              {...element}
              style={
                !isEven(index) ? styleForUnevenElements : styleForEvenElements
              }
            />
          ))}
      </LockedEntryWithCheck>
    </View>
  )
}

export default FormComponent
