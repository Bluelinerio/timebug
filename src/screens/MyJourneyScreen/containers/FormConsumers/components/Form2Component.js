import React                  from 'react'
import { View }               from 'react-native'
import PillarTimeTableElement from './../../../components/PillarTimeTableElement'
import PillarTimeTableHeader  from './../../../components/PillarTimeTableHeader'
import styles                 from '../../../styles'

type Form2Props = {
  pillars: any
}

const Form2Component = ({ pillars }: Form2Props) => (
  <View style={[styles.timeContainer, styles.container]}>
    {pillars && (
      <React.Fragment>
        <PillarTimeTableHeader />
        {Object.keys(pillars).map(pillar => {
          return (
            <PillarTimeTableElement
              key={pillar}
              pillar={pillar}
              {...pillars[pillar]}
            />
          )
        })}
      </React.Fragment>
    )}
  </View>
)

export default Form2Component
