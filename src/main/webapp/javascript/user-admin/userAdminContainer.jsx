import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import UserAdmin from './userAdmin'
import {addUser, showUser} from '../action/actions'

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addUser: addUser,
    showUser: showUser
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserAdmin)
