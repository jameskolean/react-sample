/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|MyComponent|Heart" }] */
import React from 'react'
import { addLessonPlan } from '../action/actions'

export default class HelloRedux extends React.Component {
  doClick () {
    dispatch(addLessonPlan('some plan'))
    console.log('Hello redux')
  }
  render () {
    return (
      <div>
        <h1>Hello Redux</h1>
        <button type='button' onClick={this.doClick}>Say Hello</button>
      </div>
    )
  }
}
