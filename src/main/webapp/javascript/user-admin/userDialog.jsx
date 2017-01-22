/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|Grid|Row|Button" }] */
import React, { Component } from 'react'
import {Grid, Row, Button, Modal} from 'react-bootstrap'
import UserFormBootstrap from './userFormBootstrap'
import axios from 'axios'

export default class UserDialog extends Component {
  constructor (props) {
    super(props)
    this.state = {showModal: false}
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  close () {
    this.setState({ showModal: false })
  }

  open () {
    this.setState({ showModal: true })
  }

  handleSubmit (values) {
    this.setState({ showModal: false })
    console.log('Form submitted', values)
    var _this = this
    this.serverRequest =
      console.log('posting ', values)
      axios.post('/api/user', values)
      .then(function (response) {
        _this.props.addUser(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div>
        <p>Click to get the full Modal experience!</p>
        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.open}
        >
          Add User
        </Button>

        <Modal show={this.state.showModal} >
          <Modal.Header>
            <Modal.Title>User Administration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserFormBootstrap onSubmit = {this.handleSubmit}/>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
