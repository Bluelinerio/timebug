// @flow
import { connect }              from 'react-redux'
import selectors                from '2020_redux/selectors'
import DashboardScreenComponent from '../components/DashboardScreenComponent'

const mapStateToProps = (state: any) => {
  const user = selectors.user(state)
  return {
    isLogged: !!user,
  }
}

export default connect(mapStateToProps)(DashboardScreenComponent)
