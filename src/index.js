import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'

import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { store, history } from './store'

import App from './app'

import Dashboard from './app/dashboard'

ReactDOM.render(
  <Provider store={store}>
    <App>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={Dashboard} />
        <Route path="/(:schedule)" component={Dashboard} />
      </ConnectedRouter>
    </App>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
