import React, { Component } from 'react';
import './Header.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

 class Header extends Component {

    componentDidMount(){
        axios.get('/auth/me')
        .then(res=>{console.log('user logged in')})
        .catch(err=>{ console.log('User not logged in: ', err); this.props.history.push('/')})
    }

    handleLogout(){
        axios.get('/logout').then(res=> console.log('logout', res.data))
        this.props.history.push('/')
    }
    handleHome(){
        console.log('handle Home')

    }
    handleSearch(){
        console.log('handle search')
    }

    render() {
        return (
            <div className='Header'>
                Header Comp
                <button onClick={()=>{this.handleHome()}}>Home</button>
                <button onClick={()=>{this.handleSearch()}}>Search</button>
                <button onClick={()=>{this.handleLogout()}}>Logout</button>
            </div>
        )
    }
}


export default withRouter(Header)