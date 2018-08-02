//@flow
import React                   from 'react'
import { View }                from 'react-native'
import Header                  from './BoardOfAdvisorsHeader'
import Element                 from './BoardOfAdvisorsElement'
import styles                  from '../../../../styles'
import { mediumGray, gray400 } from '../../../../../../constants/colors'

type BoardOfAdvisorsElement = {
  boardMember: string,
  pillarsOfLife: string,
  interactionFrequency: string
}

type FormComponentProps = {
  formData: {
    boardOfAdvisors: [BoardOfAdvisorsElement]
  }
}

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

const Form4Component = ({ formData }: FormComponentProps) => {
  const { boardOfAdvisors } = formData
  return (
    <View style={[styles.container, styles.tableContainer]}>
      <Header />
      {boardOfAdvisors &&
        boardOfAdvisors.map((advisor, index) => {
          const { boardMember } = advisor
          return (
            <Element
              key={boardMember}
              style={
                !isEven(index) ? styleForUnevenElements : styleForEvenElements
              }
              {...advisor}
            />
          )
        })}
    </View>
  )
}

export default Form4Component
