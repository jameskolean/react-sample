/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }] */
import React, { Component } from 'react'
import Nav from './nav/nav'
// this is a test 2
export default class Application2 extends Component {
  render () {
    return (
      <div>
        <Nav/>
        {this.props.children}
      </div>
    )
  }
}
