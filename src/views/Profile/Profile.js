import React, { Component } from 'react';
import './Profile.css';
import Header from '../../components/Header/Header';

export default class Profile extends Component {
    render() {
        return (
            <div className='Profile'>
                <Header />
                Profile View
            </div>
        )
    }
}