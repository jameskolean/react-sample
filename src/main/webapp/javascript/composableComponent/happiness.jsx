/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }] */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Happiness extends React.Component {
  render() {
    let label = (this.props.label !== "") ? <label>{this.props.label}</label> : ""
    return (
      <div>
       <input 
        ref="inp" 
        type={this.props.type}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        defaultValue={this.props.val}
        onChange={this.props.update}
        />
        <div>{label}</div>
      </div>
    )
  }
}
Happiness.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(["number","range"])
}
Happiness.defaultProp = {
  min: 0,
  max: 10,
  step: 1,
  val: 5,
  label: "Choose Happiness",
  type: "range"
}