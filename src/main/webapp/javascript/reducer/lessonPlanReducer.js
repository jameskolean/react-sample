import { ADD_LESSON_PLAN, REMOVE_LESSON_PLAN, SELECT_LESSON_PLAN } from '../action/actions'

export default function lessonPlanReducer (state = [], action) {
  switch (action.type) {
    case ADD_LESSON_PLAN:
      let newState1 = state.concat([
        {
          id: state.length + 1,
          name: action.payload,
          active: true
        }
      ])
      return newState1
    case REMOVE_LESSON_PLAN:
      let newState = []
      return state.map((lessonPlan, index) => {
        if (lessonPlan.id !== action.id) {
          newState.set(lessonPlan.id, lessonPlan)
        }
        return newState
      })
    case SELECT_LESSON_PLAN:
      return state.map((lessonPlan, index) => {
        if (index === action.index) {
          return Object.assign({}, lessonPlan, {
            active: !lessonPlan.active
          })
        }
        return lessonPlan
      })
    default:
      return state
  }
}

