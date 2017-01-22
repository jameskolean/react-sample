/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|Grid|Row" }] */
import React, { Component } from 'react'
import {Grid, Row} from 'react-bootstrap'
import UserDialog from './userDialog'
import UserList from './userList'

export default class UserAdmin extends Component {
  render () {
    return (
      <Grid>
        <Row>
          <UserDialog addUser={this.props.addUser}></UserDialog>
        </Row>
        <Row>
        <UserList users={this.props.users}></UserList>
        </Row>
      </Grid>
    )
  }
}
