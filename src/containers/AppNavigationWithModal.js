import AppNavigation         from '../navigation/app'
import { compose }           from 'recompose'
import { withNotifications } from './NotificationsContainer'
import { withFirebase } from './FirebaseContainer'

export default compose(withNotifications, withFirebase)(
  AppNavigation
)
