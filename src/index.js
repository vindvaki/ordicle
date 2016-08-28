import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
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
        <Route path="/home" component={Main} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
