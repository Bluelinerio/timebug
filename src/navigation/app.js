import React              from 'react'
import { Linking }        from 'react-native'
import { uriPrefix }      from '../constants'
import { StartNavigator } from './index'
import NavigationService  from '2020_services/navigation'

type Props = {
  dispatch: () => any,
  nav: any,
}

class AppNavigation extends React.Component<Props> {
  componentDidMount() {
    Linking.addEventListener('url', ({ url }: { url: string }) => {
      this.handleUrl(url)
    })

    Linking.getInitialURL().then((url: string) => url && this.handleUrl(url))
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL)
  }

  handleUrl(url) {
    const path = url.split(uriPrefix)[1] || url
    const action = StartNavigator.router.getActionForPathAndParams(path)
    if (action) {
      NavigationService.dispatch(action)
    }
  }

  render() {
    return <StartNavigator ref={r => NavigationService.setContainer(r)} />
  }
}

export default AppNavigation
