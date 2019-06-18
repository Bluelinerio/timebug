import AppNavigation from '../navigation/app'
import { compose } from 'recompose'
import { withNotifications } from './NotificationsContainer'

export default compose(withNotifications)(AppNavigation)
