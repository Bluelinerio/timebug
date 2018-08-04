import React                                     from 'react'
import { View }                                  from 'react-native'
import PillarTimeTableElement                    from './../../../components/PillarTimeTableElement'
import PillarTimeTableHeader                     from './../../../components/PillarTimeTableHeader'
import styles                                    from '../../../styles'
import { mediumGray, gray400 }                   from '../../../../../constants/colors'
import LockedEntry                               from '../../../components/LockedEntry'

type Form2Props = {
  pillars: any
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

const Form2Component = ({ pillars }: Form2Props) => (
  <View style={[styles.timeContainer, styles.container]}>
    {pillars ? (
      <React.Fragment>
        <PillarTimeTableHeader />
        {Object.keys(pillars).map((pillar, index) => {
          return (
            <PillarTimeTableElement
              key={pillar}
              pillar={pillar}
              style={ !isEven(index)? styleForUnevenElements : styleForEvenElements }
              {...pillars[pillar]}
            />
          )
        })}
      </React.Fragment>
    ): <LockedEntry />}
  </View>
)

export default Form2Component
