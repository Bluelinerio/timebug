import React                  from 'react';
import { View }               from 'react-native';

import PillarTimeTableElement from './PillarTimeTableElement';
import PillarTimeTableHeader  from './PillarTimeTableHeader';
import styles                 from '../styles';

const TimeSpentOnPillars = ({ pillars }) => (
    <View style={[styles.timeContainer, styles.container]}>
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