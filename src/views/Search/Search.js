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
        this.handleAddFriend = this.handleAddFriend.bind(this)
    }
    componentDidMount(){
        axios.get('/api/friend/list').then(res=>{
            console.log('componentDidMount finished', res.data)
            this.setState({friendsList:res.data})
        })
    }
    handleAddFriend(user_id){
        console.log('add Friend', user_id)
        axios.post('/api/friend/add', {id: user_id}).then(res=>{
            console.log('handleAddFriend finished', res.data)
            this.setState({friendsList:res.data})
        })
    }
    render() {
        const friendsList = this.state.friendsList.map((x,i)=>{return(
            <FriendCard key={i} user={x} handleAddFriend={()=>this.handleAddFriend(x.id)}/>
        )})
        return (
            <div className='Search'>
                <Header />
                <div className='wrap'>
                    {friendsList}
                </div>
            </div>
        )
    }
}