/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[AppNav]" }] */
import React from 'react'
import AppNav from './nav/appNav'
import '../css/style.css'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <AppNav/>
          {this.props.children}
      </div>
    )
  }
}
