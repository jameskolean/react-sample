/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|Router|Route|Link" }] */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Link, IndexRedirect, hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import ReactDOM from 'react-dom'
import People from './people/people'
import App from './app'
import ComposableComponent from './composableComponent/composableComponent'
import SimpleState from './simpleState/simpleState'
import NestedData from './nestedData/nestedData'
import UserAdminContainer from './user-admin/userAdminContainer'
import HelloRedux from './redux/helloRedux'
import LessonPlanListContainer from './lessonPlan/LessonPlanListContainer'
import allReducers from './reducer/index'
import {Jumbotron, Button} from  'react-bootstrap'
import {Grid, Row} from 'react-bootstrap'

const NotFound = () => <h1>404.. This page is not found!</h1>
const Welcome = () => {
  return (
    <Grid>
      <Row>
        <Jumbotron>
          <h1>Welcome</h1>
          <p>This is Kayla's awesome lesson app.</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
      </Row>
    </Grid>
  )
}
const store = createStore(allReducers, {users: []})

const history = syncHistoryWithStore(browserHistory, store)
history.listen(location => console.log(location))

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='/welcome' />
        <Route path='/welcome' component={Welcome} />
        <Route path='/rest' component={People} />
        <Route path='/admin-user' component={UserAdminContainer} />
        <Route path='/lesson-plan' component={LessonPlanListContainer} />
        <Route path='/simpleState' component={SimpleState} />
        <Route path='/nestedData' component={NestedData} />
        <Route path='/composable-component' component={ComposableComponent} />
        <Route path='/redux' component={LessonPlanListContainer} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
)

