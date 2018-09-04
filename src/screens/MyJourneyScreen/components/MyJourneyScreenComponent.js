//@flow
import React                 from 'react'
import { ScrollView }        from 'react-native'
import { SafeAreaView }      from 'react-navigation'

import User                  from './../../../containers/User'
import ProgressCellComponent from './ProgressCellComponent'
import styles                from '../styles'

const shouldShowUserProgressWithUser = (user: any): boolean =>
  user.forms.length > 0

const MyJourneyScreenComponent = () => (
  <SafeAreaView
    forceInset={{ top: 'always', bottom: 'never' }}
    style={styles.container}
  >
    <ScrollView style={styles.container}>
      <User>
        {({ userState, isLoggedIn }) =>
          isLoggedIn && (
            <React.Fragment>
              {shouldShowUserProgressWithUser(userState) && (
                <ProgressCellComponent />
              )}
            </React.Fragment>
          )
        }
      </User>
    </ScrollView>
  </SafeAreaView>
)

export default MyJourneyScreenComponent
