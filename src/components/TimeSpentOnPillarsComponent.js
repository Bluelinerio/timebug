import React from 'react'
import FormConsumer from '../containers/Form2Consumer'

import { View, Text } from 'react-native'
import PillarTimeTableElement from './PillarTimeTableElement'
const TimeSpentOnPillars = ({ pillars }) => (
    <View style={{
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        padding: 20,
        marginVertical: 10
    }}>
            {
                pillars && 
                    Object.keys(pillars).map(pillar => {
                        return (
                            <PillarTimeTableElement key={pillar} pillar={pillar} {...pillars[pillar]} />
                        )
                    })
            }
    </View>
)


export default TimeSpentOnPillars