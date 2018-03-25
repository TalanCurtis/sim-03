import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import Header from '../../components/Header/Header';

export default class Home extends Component {
    componentDidMount(){
        console.log()
        axios.get('/auth/me').then(res=> console.log(res.data))
    }
    checkSession(){
        axios.get('/auth/me')
        .then(res=>{console.log('user logged in')})
        .catch(err=>{ console.log('User not logged in: ', err); this.props.history.push('/')})

    }
    logout(){
        axios.get('/logout').then(res=> console.log('logout', res.data))
        this.props.history.push('/')
    }
    render() {
        return (
            <div className='Home'>
                <Header />
                Home View
                {/* {JSON.stringify(this.props.userData, null, 2)} */}
                {JSON.stringify({name:'john', age:44})}
                <button onClick={()=>this.checkSession()}>Check Session</button>
                <button onClick={()=>this.logout()}>logout</button>
            </div>
        )
    }
}