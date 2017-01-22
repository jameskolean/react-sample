import {
  combineReducers
} from 'redux'
import lessonPlanReducer from './lessonPlanReducer'
import userReducer from './userReducer'
import {
  routerReducer
} from 'react-router-redux'

const allReducers = combineReducers({
  lessonPlans: lessonPlanReducer,
  users: userReducer,
  routing: routerReducer
})

export default allReducers