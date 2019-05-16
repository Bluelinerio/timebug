// @flow
import UserProvider                    from './UserProvider'
import type { Props as ProvidedProps } from './UserProvider'
import { mapProps, compose }           from 'recompose'

type ReceivedProps = ProvidedProps | any

export type Props = {
  anonymous?: boolean,
  name: string,
  email: string,
  image: string,
}

const merge = (props: ReceivedProps): Props => {
  const { user } = props
  if (!user)
    return {
      ...props,
      anonymous: true,
    }
  const { name, email, facebookId } = user

  const image = `https://graph.facebook.com/${facebookId}/picture?type=normal`

  return {
    anonymous: false,
    name,
    email,
    image,
  }
}

export default compose(UserProvider, mapProps(merge))
