/* @flow */
import React                 from 'react'
import User                  from './User'
import LogoutButtonContainer from './LogoutButtonContainer'
import OpenLoginContainer    from './OpenLoginContainer'

type Props = {
  children: ({ uri: string }) => React.Node | [React.Node],
}

/**
 * @class UserProfileImageConsumer 
 * Renders the user avatar or the default avatar and makes them clickable to login or logout of the app
 */
class UserProfileImageConsumer extends React.PureComponent<Props> {
  render() {
    const { children } = this.props
    return (
      <User>
        {({ userState }) => {
          if (userState && userState.facebookId)
            return (
              <LogoutButtonContainer>
                {children({
                  uri: `https://graph.facebook.com/${
                    userState.facebookId
                  }/picture?type=normal`,
                })}
              </LogoutButtonContainer>
            )
          else
            return (
              <OpenLoginContainer>
                {children({
                  uri: `https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png`,
                })}
              </OpenLoginContainer>
            )
        }}
      </User>
    )
  }
}

export default UserProfileImageConsumer
