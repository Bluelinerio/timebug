import React from 'react'

import { View, Text } from 'react-native'
import PillarTimeTableElement, { PillarTimeTableHeader } from './PillarTimeTableElement'

const TimeSpentOnPillars = ({ pillars }) => (
    <View style={{
        flexDirection: 'column',
        flex: 1,    
        borderRadius: 6,
        padding: 16
    }}>
        
            {
                pillars && 
                    <React.Fragment>
                        <PillarTimeTableHeader />
                            {
                                Object.keys(pillars).map(pillar => {
                                    return (
                                        <PillarTimeTableElement key={pillar} pillar={pillar} {...pillars[pillar]} />
                                    )
                                })
                            }
                        
                    </React.Fragment>
                    
            }
    </View>
)


export default TimeSpentOnPillars