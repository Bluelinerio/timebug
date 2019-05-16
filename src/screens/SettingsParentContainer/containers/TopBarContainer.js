//@flow
import { compose, mapProps }                 from 'recompose'
import { withNavigation, NavigationActions } from 'react-navigation'
import TopBar                                from '../components/TopBar'

const merge = (props: any) => {
  const { navigation: { dispatch } } = props
  const goBack = () => dispatch(NavigationActions.back())

  return {
    onPress: goBack,
  }
}

export default compose(withNavigation, mapProps(merge))(TopBar)
