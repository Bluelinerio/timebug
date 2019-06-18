import { NavigationActions, StackActions } from 'react-navigation'
import type { NavigationParams, NavigationRoute } from 'react-navigation'
import tron from 'reactotron-react-native'

let _container // eslint-disable-line

class NavigationService {
  _container = null
  setContainer = (container: Object) => {
    this._container = container
  }

  dispatch = (action: {
    type: string,
    routeName: string,
    params?: any,
    key?: string,
  }) => {
    if (action) {
      tron.log('NAV ACTION')
      tron.log(action)
    }
    if (!this._container) return null
    this._container.dispatch(action)
  }

  reset = (routeName: string, params?: NavigationParams) => {
    _container.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName,
            params,
          }),
        ],
      })
    )
  }

  navigate = (routeName: string, params?: NavigationParams) => {
    _container.dispatch(
      NavigationActions.navigate({
        type: 'Navigation/NAVIGATE',
        routeName,
        params,
      })
    )
  }

  navigateDeep = (
    actions: Array<{ routeName: string, params?: NavigationParams }>
  ) => {
    _container.dispatch(
      actions.reduceRight(
        (prevAction, action): any =>
          NavigationActions.navigate({
            type: 'Navigation/NAVIGATE',
            routeName: action.routeName,
            params: action.params,
            action: prevAction,
          }),
        undefined
      )
    )
  }

  getCurrentRoute = (): NavigationRoute | null => {
    if (!_container || !_container.state.nav) {
      return null
    }

    return _container.state.nav.routes[_container.state.nav.index] || null
  }
}

const instance = new NavigationService()

export default instance
