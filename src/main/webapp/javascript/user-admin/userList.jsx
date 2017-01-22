/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }] */
import React from 'react'

export default class UserList extends React.Component {

  renderList () {
    return this.props.users.map((user) => {
      return (
          <li key = {user.id}
            onClick = {() => this.props.showUser(user)}>
              {user.firstname} {user.lastname}
          </li>
      )
    })
  }

  render () {
    console.log('users', this.props.users)
    return (
      <div >
        <ul >
          {this.renderList()}
        </ul>
      </div>
    )
  }
}