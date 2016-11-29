import ReactDOM from 'react-dom';
import React from 'react';
import People from './people';
import Home from './home';
import Sessions from './sessions';
import Nav from './nav';
import '../css/general.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

const Container = ( props ) => 
<div>
  <Nav />
  {props.children}
</div>

const NotFound = () => <h1>404.. asdasdadsdaThis page is not found!</h1>

ReactDOM.render(
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            <Route path='/sessions' component={Sessions} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>,
        document.getElementById( 'content' )
);
