/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|FormGroup|FormControl|ControlLabel" }] */
import React, { Component } from 'react'
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

export default class SimpleTextGroup extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.isValid = this.isValid.bind(this)
  }

  isValid (value) {
    if (value === undefined) return true
    return !(this.props.required && value.length === 0)
  }

  handleChange (event) {
    let value = event.target.value
    this.props.onUpdate(value, this.props.id, this.isValid(value))
  }

  componentDidMount () {
    let value = this.props.value
    this.props.onUpdate(value, this.props.id, this.isValid(value))
  }

  render () {
    return (
      <FormGroup
        controlId={this.props.id}
        validationState={this.isValid() ? 'success' : 'error'}
      >
      <ControlLabel>{this.props.label}</ControlLabel>
      <FormControl type="text"
        ref={this.props.id}
        className="form-control"
        onChange={this.handleChange}
        value={this.props.value}
        placeholder={this.props.label}/>
      </FormGroup>
    )
  }
}
SimpleTextGroup.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onUpdate: React.PropTypes.func.isRequired,
  validate: React.PropTypes.func
}
SimpleTextGroup.defaultProp = {
}
