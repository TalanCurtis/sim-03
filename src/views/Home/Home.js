import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className='Home'>
                Home View
                {/* {JSON.stringify(this.props.userData, null, 2)} */}
                {JSON.stringify({name:'john', age:44})}
            </div>
        )
    }
}