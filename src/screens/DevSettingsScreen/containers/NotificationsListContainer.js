// @flow
import { connect }       from 'react-redux'
import selectors         from '2020_redux/selectors'
import NotificationsList from '../components/NotificationsList'

const mapStateToProps = (state: any) => {
  const notifications = selectors.notifications(state) || []

  return {
    notifications,
  }
}

export default connect(mapStateToProps)(NotificationsList)
