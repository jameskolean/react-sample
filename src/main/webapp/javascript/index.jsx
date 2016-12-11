/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|Router|Route|Link" }] */
import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import ReactDOM from 'react-dom'
import People from './people/people'
import Application from './application'
import ComposableComponent from './composableComponent/composableComponent'
import SimpleState from './simpleState/simpleState'
import NestedData from './nestedData/nestedData'
import '../css/general.css'

const NotFound = () => <h1>404.. This page is not found!</h1>
const statelessFunctionComponent = () => <h1>Hello from a stateless function component</h1>

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Application}>
      <IndexRoute component={statelessFunctionComponent} />
      <Route path='/rest' component={People} />
      <Route path='/simpleState' component={SimpleState} />
      <Route path='/nestedData' component={NestedData} />
      <Route path='/composable-component' component={ComposableComponent} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('content')
)

