/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|MyComponent|Heart" }] */
import React from 'react'

export default class NestedData extends React.Component {

  render () {
    return (
      <MyComponent>I <Heart/></MyComponent>
    )
  }
}
const MyComponent = (props) => <h1>{props.children}</h1>
class Heart extends React.Component {
  render () {
    return <span>&hearts;</span>
  }
}
