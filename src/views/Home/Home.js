import React, { Component } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';

export default class Home extends Component {

    render() {
        return (
            <div className='Home'>
                <Header />
                Home View
            </div>
        )
    }
}