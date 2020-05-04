import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import configureStore from './store'

import Calculator from './components/Calculator/Calculator'
import Users from './components/Users/Users'
import Fixed from './components/Fixed/Fixed'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/calculator' component={Calculator} />
          <Route exact path='/users' component={Users} />
          <Route render={() => <Redirect to='/calculator' />} />
        </Switch>
        <Fixed />
      </Fragment>
    </Router>
  </Provider>
)

export default App
