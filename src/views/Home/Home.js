import React, { Component } from 'react';
import './Home.css';
import axios from 'axios'

export default class Home extends Component {
    checkSession(){
        axios.get('/auth/me').then(res=> console.log('Check Sessions', res.data))
    }
    logout(){
        axios.get('/logout').then(res=> console.log('logout', res.data))
    }
    render() {
        return (
            <div className='Home'>
                Home View
                {/* {JSON.stringify(this.props.userData, null, 2)} */}
                {JSON.stringify({name:'john', age:44})}
                <button onClick={()=>this.checkSession()}>Check Session</button>
                <button onClick={()=>this.logout()}>logout</button>
            </div>
        )
    }
}