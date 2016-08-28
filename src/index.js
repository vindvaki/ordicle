import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import ArticleContainer from './containers/ArticleContainer';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="/articles" component={ArticleContainer} />
    </Route>
  </Router>
), document.getElementById('root'));
