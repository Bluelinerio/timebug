import { compose, mapProps } from 'recompose'
import { withNavigation }    from 'react-navigation'
import {
  goToMyJourneyScreen,
  goToHomeScreen
}                            from '../../../redux/actions/nav.actions'
import ContentArea           from '../components/ContentArea'

export default compose(
  withNavigation,
  mapProps(({ navigation }) => {
    const buttons = [
      {
        text: 'My Journey',
        onPress: () => navigation.dispatch(goToMyJourneyScreen()),
        style: {}
      },
      {
        text: 'Dashboard',
        onPress: () => navigation.dispatch(goToHomeScreen()),
        style: {}
      },
      {
        text: 'Guide Book',
        onPress: () => console.log('Guide book'),
        style: {}
      },
      {
        text: 'My Rewards',
        onPress: () => console.log('My Rewards'),
        style: {}
      }
    ]
    return {
      navigation,
      buttons
    }
  })
)(ContentArea)