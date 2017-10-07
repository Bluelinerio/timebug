This applications uses [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools). The Redux DevTools records dispatched actions and the state of the Redux store at every point in time.

This can be enabled by replacing the original redux's `compose` with `composeWithDevTools` from remote-redux-devtools

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
```

You can open Redux DevTools by going to: http://remotedev.io/local.
