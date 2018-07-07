// @flow
import React                           from 'react'
import { ApolloProvider }              from 'react-apollo'
import { Provider }                    from 'react-redux'
import { AppRegistry, Platform }       from 'react-native'
import { PersistGate }                 from 'redux-persist/es/integration/react'
import codePush                        from 'react-native-code-push'

import {
  isNativeUpdateRequired,
  NativeUpdateRequired
}                                      from './containers/VersionGate'
import './reactotron'
import setup                           from './redux'
import { resetStore }                  from './redux/actions'
import { client }                      from './services/apollo'
import './services/sentry'
import AppNavigation                   from './navigation/app'
import { APP_NAME }                    from './constants'
import DefaultIndicator                from './components/DefaultIndicator'
import Error                           from './components/Error'

if (__DEV__) {
  //Show network requests such as fetch, WebSocket etc. in chrome dev tools:
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest
}

const { persistor, store } = setup()

type State = {
  error?: any
}
export default class App extends React.Component<{}, State> {
  state: State = {
    error: null
  }
  async componentDidCatch(error: any) {
    if (!__DEV__ && error !== this.state.error) {
      store.dispatch(resetStore())
      persistor.purge()
    }
    this.setState({
      error
    })
  }
  render() {
    const { error } = this.state
    if (error) {
      return <Error message={error} />
    }
    if (isNativeUpdateRequired()) {
      return <NativeUpdateRequired />
    }
    if (Platform.OS === 'ios') {
      return (
        <PersistGate
          loading={<DefaultIndicator />}
          onBeforeLift={() => {}}
          persistor={persistor}
        >
          <ApolloProvider client={client}>
            <Provider store={store}>
              <AppNavigation />
            </Provider>
          </ApolloProvider>
        </PersistGate>
      )
    } else {
      return (
        <ApolloProvider client={client}>
          <Provider store={store}>
            <AppNavigation />
          </Provider>
        </ApolloProvider>
      )
    }
  }
}

if(__DEV__) {
  AppRegistry.registerComponent(APP_NAME, () => App)
} else {
  const codePushConfigurations = {
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    installMode: codePush.InstallMode.ON_NEXT_RESUME
  }
  
  const CodepushApp = codePush(codePushConfigurations)(App)
  
  AppRegistry.registerComponent(APP_NAME, () => CodepushApp)
  
}