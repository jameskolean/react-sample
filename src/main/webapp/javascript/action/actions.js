/*
 * action types
 */

export const ADD_LESSON_PLAN = 'ADD_LESSON_PLAN'
export const SHOW_LESSON_PLAN = 'ADD_LESSON_PLAN'
export const REMOVE_LESSON_PLAN = 'REMOVE_LESSON_PLAN'
export const SELECT_LESSON_PLAN = 'SELECT_LESSON_PLAN'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SELECT_USER = 'SELECT_USER'
  /*
   * other constants
   */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export const addLessonPlan = (text) => {
  console.log('Adding Lesson ', text)
  return {
    type: ADD_LESSON_PLAN,
    payload: text
  }
}

export const showLessonPlan = (lesson) => {
  console.log('Show Lesson ', lesson)
  return {
    type: SHOW_LESSON_PLAN,
    payload: lesson
  }
}

export const removeLessonPlan = (index) => {
  return {
    type: REMOVE_LESSON_PLAN,
    payload: index
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter
  }
}

export const addUser = (user) => {
  console.log('Adding User ', user)
  return {
    type: ADD_USER,
    payload: user
  }
}

export const removeUser = (index) => {
  return {
    type: REMOVE_USER,
    payload: index
  }
}