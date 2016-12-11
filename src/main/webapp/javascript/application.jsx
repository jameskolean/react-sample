/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[React|Nav]" }] */
import React, { Component } from 'react'
import Nav from './nav/nav'

export default class Application extends Component {
  render () {
    return (
      <div>
        <Nav/>
        {this.props.children}
      </div>
    )
  }
}
