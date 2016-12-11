/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class SimpleState extends Component {

  constructor (props) {
    super(props)
    this.state = {
      dog: 'Woof',
      cat: 'Meoow'}
  }
  update (e) {
    this.setState({dog: e.target.value})
  }
  render () {
    return (
        <div >
          <lable>Dog</lable>
          <input type="text" onChange={this.update.bind(this)}/>
          <h1>Dog says {this.state.dog}, cat says {this.state.cat}</h1>
        </div>
    )
  }
}
