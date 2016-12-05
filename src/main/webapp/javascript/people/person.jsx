/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }] */
import React, { Component } from 'react'

export default class Person extends Component {

  render () {
    let {firstName, lastName} = this.props
    return (
      <div key='{key}' className='person'>{firstName} {lastName}</div>
    )
  }
}
