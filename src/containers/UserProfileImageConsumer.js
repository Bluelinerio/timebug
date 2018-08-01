/* @flow */
import React from 'react'
import md5 from 'md5'
import { connect } from 'react-redux'
import userSelectors from '../redux/selectors/user.selectors'
import combineSelectors from '../redux/selectors/combineSelectors'

type Props = {
  children: ({ uri: string }) => React.Node | [React.Node],
  user: { email: string }
}

const UserProfileImageConsumer = ({ children, user }: Props) => user
  && user.email
  && children
  && children({ uri: `https://www.gravatar.com/avatar/${md5(user.email)}`}) || null

export default connect(
  combineSelectors(userSelectors)
)(UserProfileImageConsumer)
