/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|LessonPlanForm|Text|Field" }] */
import React from 'react'
import {Form, Text, Field} from 'react-form'

const config = {
  validate: ({ firstname, lastname }) => {
    return {
      firstname: !firstname ? 'A firstname is required' : undefined,
      lastname: !lastname ? 'A lastname is required' : undefined
    }
  }
}
const component = ({submitForm}) => {
  return (
    <form onSubmit={submitForm}>
      <Text field='firstname' />
      <Text field='lastname' />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form(config)(component)
