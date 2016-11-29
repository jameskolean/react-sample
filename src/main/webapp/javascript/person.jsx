import React, { Component } from 'react'

export default class Person extends Component {

    render() {
        let {firstName, lastName} = this.props;
        return (
            <div activeClassNmae='personActive' className='person'>{firstName} {lastName}</div>
        )
    }
}
