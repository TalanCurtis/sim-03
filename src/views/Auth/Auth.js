import React, { Component } from 'react';
import './Auth.css';

export default class Auth extends Component {
    render() {
        return (
            <div className='Auth'>
                Auth View
                {/* find out why my react app login is not working */}
                {/* <a href={process.env.REACT_APP_LOGIN}> Login</a> */}
                <a href={'http://localhost:3006/auth'}><button>Login</button></a>
            </div>
        )
    }
}