import React, { Component } from 'react';
import './Search.css';
import Header from '../../components/Header/Header';
import axios from 'axios';
import FriendCard from '../../components/FriendCard/FriendCard'


export default class Search extends Component {
    constructor(){
        super()
        this.state={
            friendsList:[]
        }
    }
    componentDidMount(){
        axios.get('/api/friend/list').then(res=>{
            console.log('made it back', res.data)
            this.setState({friendsList:res.data})
        })
    }
    render() {
        const friendsList = this.state.friendsList.map((x,i)=>{return(
            <FriendCard user={x} />
        )})
        return (
            <div className='Search'>
                <Header />
                <list className='wrap'>
                    {friendsList}
                </list>
            </div>
        )
    }
}