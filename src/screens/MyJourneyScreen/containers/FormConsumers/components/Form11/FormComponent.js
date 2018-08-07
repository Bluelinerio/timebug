//@flow
import React from 'react'
import { View } from 'react-native'
import ListElement from '../../../../components/ListElement'
import styles from '../../../../styles'
import { mediumGray, gray400 } from '../../../../../../constants/colors'
import { LockedEntryWithCheck } from '../../../../components/LockedEntry'
import GenericHeader from '../../../../components/GenericHeader'

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
 * TODO: add flow
 */
const FormComponent = props => {
  const { elements, header } = props
  return (
    <View style={[styles.container, styles.tableContainer]}>
      <LockedEntryWithCheck check={() => elements && elements.length > 0}>
        <GenericHeader {...header} />
        {elements &&
          elements.map((element, index) => (
            <ListElement
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
