import React                                                    from 'react'
import { ScrollView }                                           from 'react-native'

import User                                                     from './../../../containers/User'
import ProgressCellComponent                                    from './ProgressCellComponent'

import styles                                                   from '../styles'

import FormComponent                                           from '../containers/FormConsumers'
import JourneyCarouselComponent                                from '../containers/JourneyCarouselContainer'

const shouldShowUserProgressWithUser = user => user.forms.length > 0

const MyJourneyScreenComponent = (props: any) => (
    <ScrollView style={styles.container}>
        <User>
            { ({ userState, isLoggedIn }) => 
                isLoggedIn &&
                    (
                        <React.Fragment>
                            {
                                shouldShowUserProgressWithUser(userState) &&
                                    (<ProgressCellComponent/>)
                            }
                            {
                                shouldShowUserProgressWithUser(userState) &&
                                    (<FormComponent step={'2'} />)
                            }
                            {
                                shouldShowUserProgressWithUser(userState) &&
                                    (<JourneyCarouselComponent/>)
                            }
                        </React.Fragment>                        
                    )
            }
        </User>
    </ScrollView>
)

export default MyJourneyScreenComponent