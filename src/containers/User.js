// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import userSelectors from '../redux/selectors/user.selectors'
import combineSelectors from '../redux/selectors/combineSelectors'
import type { User } from '../types'

type Props = {
  renderWithAnonymous?: () => React.Node,
  renderWithUser?: (props: User) => React.Node,
  renderWithAuthenticating?: () => React.Node,
  renderWithUndetermined?: () => React.Node,
  user: User,
  userId: string,
  isLoggedIn: boolean,
  isAnonymous: boolean,
  isAuthenticating: boolean,
  children: ({
    user: User,
    isLoggedIn: boolean,
    isAnonymous: boolean,
    isAuthenticating: boolean
  }) => React.Node
}

export default connect(
  combineSelectors(userSelectors)
)(
  ({
    renderWithAnonymous,
    renderWithUser,
    renderWithAuthenticating,
    renderWithUndetermined,
    user,
    isLoggedIn,
    isAnonymous,
    isAuthenticating,
    isUndetermined,
    children
  }: Props) => {
    if(isAnonymous && renderWithAnonymous) return renderWithAnonymous()
    if (isUndetermined && renderWithUndetermined) return renderWithUndetermined()
    if (isAuthenticating && renderWithAuthenticating) return renderWithAuthenticating()
    if (isLoggedIn && renderWithUser) return renderWithUser(user)

    if (children)
      return children({
        user,
        isLoggedIn,
        isUndetermined,
        isAuthenticating,
        isAnonymous
      })
    return null
  }
)
