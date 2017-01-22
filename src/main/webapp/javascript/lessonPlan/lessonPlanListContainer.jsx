import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LessonPlanList from './LessonPlanList'
import {addLessonPlan, showLessonPlan} from '../action/actions'

const mapStateToProps = (state) => {
  return {
    lessonPlans: state.lessonPlans
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addLessonPlan: addLessonPlan,
    showLessonPlan: showLessonPlan
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LessonPlanList)
