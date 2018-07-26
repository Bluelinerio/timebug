import React                                                    from 'react'
import { ScrollView }                                           from 'react-native'

import User                                                     from './../../../containers/User'
import TimeSpentOnPillars                                       from './../../../containers/TimeSpentOnPillarsContainer'
import ProgressCellComponent                                    from './ProgressCellComponent'

import styles                                                   from '../styles'

const shouldShowUserProgressWithUser = user => user.forms.length > 0

const MyJourneyScreenComponent = (props: any) => (
    <ScrollView style={styles.container}>
        <User>
            { ({ userState, isLoggedIn }) => 
                isLoggedIn &&
                    (
                        <React.Fragment>
                            <TimeSpentOnPillars />
                            {
                                shouldShowUserProgressWithUser(userState) &&
                                    (<ProgressCellComponent/>)
                            }
                        </React.Fragment>                        
                    )
            }
        </User>
    </ScrollView>
)

export default MyJourneyScreenComponent