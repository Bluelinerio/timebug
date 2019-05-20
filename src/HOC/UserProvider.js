// @flow
import { connect } from 'react-redux'
import selectors   from '2020_redux/selectors'
import { compose } from 'recompose'

export type Props = {
  user: any,
}

const mapStateToProps = (state: any) => {
  const user = selectors.user(state)
  return {
    user,
  }
}

export default compose(connect(mapStateToProps))
