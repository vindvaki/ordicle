import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import words from './reducers/words'

import App from './App';
import Main from './components/Main';

let store = createStore(words)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Main} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
