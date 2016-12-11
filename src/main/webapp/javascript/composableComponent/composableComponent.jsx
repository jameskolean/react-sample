/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }] */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Happiness from './happiness'

export default class ComposableCompoment extends Component {
  constructor() {
      super()
      this.state={
        myHappiness:0,
        yourHappiness:0
      }
      // ensure 'this' context
      this.updateMyHappiness = this.updateMyHappiness.bind(this)
      this.updateYourHappiness = this.updateYourHappiness.bind(this)
  }
  updateMyHappiness (e){
    this.setState({
      myHappiness: e.target.value
    })
  }
  updateYourHappiness (e){
    this.setState({
      yourHappiness: e.target.value
    })
  }
  render () {
    return (
      <div>
        <Happiness 
          ref="myHappiness" 
          type="range"
          min={0}
          max={5}
          step={1}
          val={0}
          label="My Happiness"
          update={this.updateMyHappiness} />
        <Happiness 
          ref="yourHappiness" 
          type="number"
          min={0}
          max={50}
          step={5}
          val={25}
          label="Your Happiness"
          update={this.updateYourHappiness} />
          <div>I am {this.state.myHappiness} happy and you are {this.state.yourHappiness} happy.</div>
      </div>
    )
  }
}
