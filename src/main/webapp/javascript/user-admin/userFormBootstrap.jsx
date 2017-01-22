/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "SimpleTextGroup|SimpleCheckboxGroup|Button" }] */
import React from 'react'
import {Button} from 'react-bootstrap'
import SimpleTextGroup from '../form/simpleTextGroup'
import SimpleCheckboxGroup from '../form/simpleCheckboxGroup'
import {Map} from 'immutable'
import {includes, values} from 'lodash'

export default class UserFormBootstrap extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      data: Map({firstname: '', lastname: ''}),
      validForm: false,
      firstname: '',
      lastname: '',
      active: false}
    this.doSubmit = this.doSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validFields = {}
  }

  handleChange (value, id, isValid) {
    this.validFields[id] = isValid
    this.setState({
      data: this.state.data.set(id, value),
      validForm: !(includes(values(this.validFields), false))
    })
  }

  doSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.state.data.toObject())
  }

  render () {
    const firstname = 'firstname'
    const lastname = 'lastname'
    const active = 'active'
    const data = this.state.data
    return (
      <form onSubmit={this.doSubmit}>
        <SimpleTextGroup
          id={firstname}
          value={data.get(firstname)}
          onUpdate={this.handleChange}
          label="First Name"
          required={true}
        />
        <SimpleTextGroup
          id={lastname}
          value={data.get(lastname)}
          onUpdate={this.handleChange}
          label="Last Name"
          required={true}
        />
        <SimpleCheckboxGroup
          id={active}
          value={data.get(active)}
          onUpdate={this.handleChange}
          label="Active"
        />
        <Button
          disabled={!this.state.validForm}
          className="btn btn-primary btn-large centerButton"
          type="submit">Send</Button>
      </form>
    )
  }
}
