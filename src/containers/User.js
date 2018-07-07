// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { getUserState } from '../redux/selectors/rootReducer.selectors'
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
  children: ({
    userSate: UserState,
    isLoggedIn: boolean,
    undetermined: boolean,
    authenticating: boolean,
    anonymous: boolean
  }) => React.Node
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
  }: Props) => {
    const isLoggedIn = userState && typeof userState === 'object'
    const undetermined = userState === UNDETERMINED
    const authenticating = userState === AUTHENTICATING
    const anonymous = userState === ANONYMOUS

    if (typeof userState === 'string') {
      if (renderWithState) return renderWithState(userState)
      if (undetermined && renderWithUndetermined)
        return renderWithUndetermined()
      if (anonymous && renderWithAnonymous) return renderWithAnonymous()
      if (authenticating && renderWithAuthenticating)
        return renderWithAuthenticating()
    }

    if (isLoggedIn && renderWithUser) return renderWithUser(userState)

    if (children)
      return children({
        userState,
        isLoggedIn,
        undetermined,
        authenticating,
        anonymous
      })
    return null
  }
)
