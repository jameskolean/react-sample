import React, { Component } from 'react'
import People from "./people.jsx";
import Sessions from "./sessions.jsx";
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

export default class Nav extends Component {

    render() {
        return (
            <div className='nav'>
                <Link to='/'>People</Link>&nbsp;
                <Link to='/sessions'>Sessions</Link>
            </div>
        );
    }
}
