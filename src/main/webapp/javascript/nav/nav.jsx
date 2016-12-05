/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute } from 'react-router'
/* eslint-enable no-unused-vars */

export default class Nav extends Component {
  render () {   
    return (
      <div className='nav'>
        <Link to='/people'>People</Link>&nbsp;
        <Link to='/courses'>Courses</Link>
      </div>
    )
  }
}
