/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }] */
import React from 'react'
import ReactDOM from 'react-dom'
import People from './people/people'
import Courses from './courses/courses'
import Home from './home'
import Welcome from './welcome'
import Application from './application'
import '../css/general.css'
import { Router, Route, Link, IndexRoute, hashHistory  } from 'react-router'

const NotFound = () => <h1>404.. asdasdadsdaThis page is not found!</h1>

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Application}>
      <IndexRoute component={Home} />
      <Route path='/' component={Welcome} />
      <Route path='/people' component={People} />
      <Route path='/courses' component={Courses} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>,
  document.getElementById( 'content' )
)
