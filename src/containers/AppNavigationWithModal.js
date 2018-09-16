import AppNavigation         from '../navigation/app'
import { compose }           from 'recompose'
import { withModal }         from '../containers/ModalContainer'
import { withNotifications } from './NotificationsContainer'

export default compose(withNotifications, withModal)(AppNavigation)
