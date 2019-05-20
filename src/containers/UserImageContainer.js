/* @flow */
import { compose, mapProps }           from 'recompose'
import UserFacebookDataProvider        from '../HOC/UserFacebookDataProvider'
import type { Props as FacebookProps } from '../HOC/UserFacebookDataProvider'
import UserProfileImage                from './UserProfileImageContainer'
import styles                          from '../styles/components/UserImage'

type Props = FacebookProps | any

const merge = (props: Props) => {
  const { anonymous, image } = props
  const source = anonymous
    ? {
      uri: `https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png`,
    }
    : { uri: image }
  return {
    styles: {
      headerAvatar: styles.avatar,
    },
    source,
  }
}

export default compose(UserFacebookDataProvider, mapProps(merge))(
  UserProfileImage
)
