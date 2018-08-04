//@flow
import React                   from 'react'
import { View }                from 'react-native'
import Header                  from './BoardOfAdvisorsHeader'
import Element                 from './BoardOfAdvisorsElement'
import LockedEntry             from '../../../../components/LockedEntry'
import styles                  from '../../../../styles'
import { mediumGray, gray400 } from '../../../../../../constants/colors'

type BoardOfAdvisorsElement = {
  boardMember: string,
  pillarsOfLife: string,
  interactionFrequency: string
}

type FormComponentProps = {
    boardOfAdvisors: [BoardOfAdvisorsElement]
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

const Form4Component = ({ boardOfAdvisors }: FormComponentProps) => {
  return (
    <View style={[styles.container, styles.tableContainer]}>
      {boardOfAdvisors ?
        <React.Fragment> 
          <Header />
            {
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
              })
            }
        </React.Fragment>  
        : <LockedEntry />
      }
    </View>
  )
}

export default Form4Component
