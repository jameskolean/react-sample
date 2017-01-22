/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|FormGroup|Checkbox" }] */
import React, { Component } from 'react'
import {FormGroup, Checkbox} from 'react-bootstrap'

export default class SimpleCheckboxGroup extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    let value = event.target.value === 'on'
    this.props.onUpdate(value, this.props.id, true)
  }

  componentDidMount () {
    let value = this.props.value
    this.props.onUpdate(value, this.props.id, true)
  }

  render () {
    return (
      <FormGroup
        controlId={this.props.id}
      >
        <Checkbox
          onChange={this.handleChange}
          value={this.props.value}>
          {this.props.label}
        </Checkbox>
      </FormGroup>
    )
  }
}
SimpleCheckboxGroup.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.bool,
  onUpdate: React.PropTypes.func.isRequired
}
SimpleCheckboxGroup.defaultProp = {
  value: false
}
