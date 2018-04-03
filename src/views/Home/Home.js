import React, { Component } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import UserCard from '../../components/UserCard/UserCard';

export default class Home extends Component {

    render() {
        return (
            <div className='Home'>
                <Header />
                <UserCard />
            </div>
        )
    }
}