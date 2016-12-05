/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Person from './person'
/* eslint-enable no-unused-vars */
import axios from 'axios'

export default class People extends Component {

  constructor (props) {
    super(props)
    this.state = {people: []}
  }

  // make ajax request
  componentDidMount () {
    var _this = this
    this.serverRequest =
      axios.get('/person')
      .then(function (response) {
        _this.setState({ people: response.data })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  componentWillUnmount () {
    this.serverRequest.abort()
  }

  render () {
    return (
        <div className="table">
          <div className="table-title">People</div>
          {this.state.people.map((person, i) => {
            return <Person key={i} firstName={person.firstName} lastName={person.lastName} />
          })}
        </div>
    )
  }
}
