import {ADD_USER, REMOVE_USER, SELECT_USER} from '../action/actions'

export default function userReducer (state = [], action) {
  switch (action.type) {
    case ADD_USER:
      let newState1 = state.concat([{
        id: action.payload.id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        active: action.payload.active
      }])
      return newState1
    case REMOVE_USER:
      let newState = []
      return state.map((user, index) => {
        if (user.id !== action.id) {
          newState.set(user.id, user)
        }
        return newState
      })
    case SELECT_USER:
      return state.map((user, index) => {
        if (index === action.index) {
          return Object.assign({}, user, {
            active: !user.active
          })
        }
        return user
      })
    default:
      return state
  }
}
