/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }] */
import React from 'react'
import LessonPlanForm from './lessonPlanForm'
import {Button} from 'react-bootstrap'

export default class LessonPlanList extends React.Component {

  renderList () {
    return this.props.lessonPlans.map((lessonPlan) => {
      return (
        <div >
          <li key = {lessonPlan.id}
            onClick = {() => this.props.showLessonPlan(lessonPlan)}>
              {lessonPlan.name}
          </li>
        </div >
      )
    })
  }

  render () {
    return (
      <div >
        <Button className = 'btn-primary'> Hello </Button>
        <LessonPlanForm onSubmit = {(values) => {
          console.log('Success!', values)
        }}
        />
        <ul >
          {this.renderList()}
        </ul>
      </div>
    )
  }
}