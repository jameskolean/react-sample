/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute } from 'react-router'
/* eslint-enable no-unused-vars */

export default class Nav extends Component {
  render () {
    return (
      <div className='nav'>
        <Link to='/'>Simplest</Link>
        &nbsp;|&nbsp;
        <Link to='/simpleState'>SimpleState</Link>
        &nbsp;|&nbsp;
        <Link to='/nestedData'>Nested Data</Link>
        &nbsp;|&nbsp;
        <Link to='/rest'>Rest</Link>
        &nbsp;|&nbsp;
        <Link to='/composable-component'>Composable Components</Link>
      </div>
    )
  }
}
