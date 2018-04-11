// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { getUserState } from '../redux/rootReducer'
import {
  UNDETERMINED,
  ANONYMOUS,
  AUTHENTICATING
} from '../services/apollo/models'
import type { UserState } from '../services/apollo/models'

type Props = {
  renderWithState?: (
    state: UNDETERMINED | ANONYMOUS | AUTHENTICATING
  ) => React.Node,
  renderWithAnonymous?: () => React.Node,
  renderWithUser?: (props?: {}) => React.Node,
  renderWithAuthenticating?: () => React.Node,
  renderWithUndetermined?: () => React.Node,
  children: (UserState) => React.Node
}

const mapStateToProps = state => ({
  userState: getUserState(state)
})

export default connect(mapStateToProps)(
  ({
    renderWithState,
    renderWithAnonymous,
    renderWithUser,
    renderWithAuthenticating,
    renderWithUndetermined,
    userState,
    children
  }) => {
    if (typeof userState === 'string') {
      if (renderWithState) return renderWithState(userState)
      if (userState === UNDETERMINED && renderWithUndetermined)
        return renderWithUndetermined()
      if (userState === ANONYMOUS && renderWithAnonymous)
        return renderWithAnonymous()
      if (userState === AUTHENTICATING && renderWithAuthenticating)
        return renderWithAuthenticating()
    }

    if (userState && typeof userState === 'object' && renderWithUser)
      return renderWithUser(userState)
    if(children) 
      return children(userState)
    return null
  }
)
