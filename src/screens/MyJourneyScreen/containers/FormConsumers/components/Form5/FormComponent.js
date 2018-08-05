import React from 'react'
import { View } from 'react-native'
import Reactotron from 'reactotron-react-native'
import GoalsHeader from './GoalsHeader'
import GoalsElement from './GoalsElement'
import styles from '../../../../styles'
import { mediumGray, gray400 } from '../../../../../../constants/colors'

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
  Reactotron.log(props)
  const { elements } = props
  return (
    <View style={[styles.container, styles.tableContainer]}>
      <GoalsHeader {...props} />
      {elements &&
        elements.map((element, index) => {
            Reactotron.log("ELEMENT")
            Reactotron.log(element)
          return <GoalsElement
            style={
              !isEven(index) ? styleForUnevenElements : styleForEvenElements
            }
            {...element}
          />
        })}
    </View>
  )
}

export default FormComponent
